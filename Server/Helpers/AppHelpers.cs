using Newtonsoft.Json.Linq;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Umbraco.Core.Models;
using Umbraco.ModelsBuilder;
using Umbraco.Web.PublishedContentModels;
using Umbraco.Core.Models.PublishedContent;
using Umbraco.Web.Models;

namespace Server.Helpers
{
    public static class AppHelpers
    {
        public static Dictionary<string, object> ToDicionary(this IPublishedContent content)
        {
            var dic = new Dictionary<string, object>();
            Parse(content, dic);
            return dic;
        }

        static void Parse(IPublishedContent content, Dictionary<string, object> dic, bool includeMetaData = true)
        {
            if (includeMetaData)
            {
                dic.Add("name", content.Name);
                dic.Add("url", content.Url);
                dic.Add("urlName", content.UrlName);
                dic.Add("docType", content.DocumentTypeAlias);
            }
            var props = content.Properties.Where(FilterProps);
            foreach (var prop in props)
            {
                var value = ParseValue(prop.Value);
                dic.Add(prop.PropertyTypeAlias, value);
            }
        }

        readonly static string[] ignoreFields = {
            "__NodeId", "__IndexType", "__Path", "__NodeTypeAlias", "__Key", "__Icon", "__nodeName"
        };

        static bool FilterProps(IPublishedProperty prop)
        {
            return !ignoreFields.Contains(prop.PropertyTypeAlias);
        }


        static object ParseValue(object value)
        {
            if(value == null)
            {
                return string.Empty;
            }
            if (value is string || value is JObject)
                return value;
            else if (value is HtmlString)
            {
                return value.ToString();
            }
            else if (value is RelatedLinks)
            {
                var dic = new Dictionary<string, object>();
                var val = (RelatedLinks)value;
                if(val.Count() == 1)
                {
                    var link = val.FirstOrDefault();
                    var linkToReturn = new { text = link.Caption, linkUrl = link.Link, targetBlank = link.NewWindow, isInternal = link.IsInternal };
                    return linkToReturn;
                }
               
            }
            else if (value is Umbraco.Web.PublishedContentModels.File)
            {
                var dic = new Dictionary<string, object>();
                var val = (Umbraco.Web.PublishedContentModels.File)value;
                return HttpContext.Current.Request.Url.GetLeftPart(UriPartial.Authority) + val.Url;
            }
            else if (value is Image)
            {
                var dic = new Dictionary<string, object>();
                var val = (Image)value;
                return HttpContext.Current.Request.Url.GetLeftPart(UriPartial.Authority) + val.Url;
            }
            else if (value is IPublishedContent)
            {
                var dic = new Dictionary<string, object>();
                Parse((IPublishedContent)value, dic, false);
                return dic;
            }
           
            else if (value is IEnumerable)
            {
                var list = value as IEnumerable;
                var res = new List<object>();
                foreach (var item in list)
                {
                    res.Add(ParseValue(item));
                }

                return res;
            }

            return value;
        }

        static bool IsEnumerable(object value) => false;
    }
}
using Umbraco.Core;
using Umbraco.Web.Mvc;
using Server.Controllers;
using Umbraco.Core.Services;
using Umbraco.Core.Publishing;
using Umbraco.Core.Events;
using Umbraco.Core.Models;
using Umbraco.Web;
using System.Collections.Generic;
using System;
using Server.Extensions;
using System.Dynamic;
using Newtonsoft.Json;

namespace Server
{
    public class ApplicationEvents : ApplicationEventHandler
    {
        protected override void ApplicationStarting(UmbracoApplicationBase umbracoApplication, ApplicationContext applicationContext)
        {
            DefaultRenderMvcControllerResolver.Current.SetDefaultControllerType(typeof(AppServerController));
            ContentService.Publishing += ContentServicePublishing;
        }

       

        private void ContentServicePublishing(IPublishingStrategy sender, PublishEventArgs<IContent> args)
        {
            var umbracoHelper = new UmbracoHelper(UmbracoContext.Current);
            var contentService = ApplicationContext.Current.Services.ContentService;
            foreach (var node in args.PublishedEntities)
            {
                if (node.ContentType.Alias == "contact")
                {
                    var publishedContent = node.ToPublishedContent();
                    var fields = publishedContent.GetPropertyValue<IEnumerable<IPublishedContent>>("fieldList");
                    var ncItems = new List<dynamic>();
                    foreach (var field in fields)
                    {
                        dynamic ncItem = new ExpandoObject();
                        ((IDictionary<string, object>)ncItem).Add("ncContentTypeAlias", field.DocumentTypeAlias);
                        ((IDictionary<string, object>)ncItem).Add("fieldName", field.DocumentTypeAlias);
                        var type = GetFieldType(field.DocumentTypeAlias);
                        ((IDictionary<string, object>)ncItem).Add("type", type);
                        ((IDictionary<string, object>)ncItem).Add("placeholder", field.GetPropertyValue<string>("placeholder"));
                        ((IDictionary<string, object>)ncItem).Add("errorMsg", field.GetPropertyValue<string>("errorMsg"));
                        ncItems.Add(ncItem);
                    }

                    node.SetValue("fieldList", JsonConvert.SerializeObject(ncItems));
                    contentService.Save(node);
                }
            }
        }

        private string GetFieldType(string fieldAlias)
        {
            switch (fieldAlias)
            {
                case "phone":
                    return "tel";
                case "email":
                    return fieldAlias;
                default:
                    return "text";
            }
        }
    }


}

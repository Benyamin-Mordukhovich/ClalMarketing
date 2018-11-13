using Examine;
using Newtonsoft.Json.Linq;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Server.Helpers;
using Umbraco.Core.Models;
using Umbraco.Web.WebApi;

namespace Server.Controllers
{

    [Route("api/[controller]")]
    [CorsHeader]
    public class AppController : UmbracoApiController
    {

        [HttpGet]
        public IHttpActionResult Content(string url = "")
        {
            
            var content = UmbracoContext.ContentCache.GetByRoute(url);
            if (content == null)
                return NotFound();

            var res = content.ToDicionary();

            if (content.DocumentTypeAlias != "home")
            {
                AddHeaderFooter(res);
            }

            return Ok(res);
        }


        private void AddHeaderFooter(Dictionary<string, object> res)
        {
            var homeContent = Umbraco.TypedContentAtRoot().FirstOrDefault();
            if (homeContent == null) return;

            var homeRes = homeContent.ToDicionary();
            res.Add("header", homeRes["header"]);
            res.Add("footer", homeRes["footer"]);
        }
    }
}
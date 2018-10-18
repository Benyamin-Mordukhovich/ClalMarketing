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
            return Ok(res);
        }
    }
}
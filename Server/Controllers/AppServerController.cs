using System.Web.Mvc;
using Umbraco.Web;
using Umbraco.Web.Mvc;

namespace Server.Controllers
{
    public class AppServerController : Controller, IRenderController
    {
        // GET: MyCustomUmbraco
        public ActionResult Index()
        {
            var url = Request.Url.LocalPath;
            var content = UmbracoContext.Current.ContentCache.GetByRoute(url);
            return View("Dev", content);
        }
    }
}
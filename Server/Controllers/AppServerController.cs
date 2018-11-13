using System.Web.Mvc;
using Umbraco.Core.Models;
using Umbraco.Web;
using Umbraco.Web.Models;
using Umbraco.Web.Mvc;

namespace Server.Controllers
{
    public class AppServerController : Controller, IRenderController
    {
        // GET: MyCustomUmbraco
        public ActionResult Index(RenderModel<IPublishedContent> model)
        {
            
            return View("Dev", model.Content);
        }
    }
}
using Umbraco.Core;
using Umbraco.Web.Mvc;
using Server.Controllers;

namespace Server
{
    public class ApplicationEvents : ApplicationEventHandler
    {
        protected override void ApplicationStarting(UmbracoApplicationBase umbracoApplication, ApplicationContext applicationContext)
        {
            DefaultRenderMvcControllerResolver.Current.SetDefaultControllerType(typeof(AppServerController));
        }
    }


}

using Microsoft.Owin;
using Owin;
using Umbraco.Web;
using Server;
using System.Web.Http;

[assembly: OwinStartup("UmbracoStandardOwinStartup", typeof(UmbracoStandardOwinStartup))]
namespace Server
{
    public class UmbracoStandardOwinStartup : UmbracoDefaultOwinStartup
    {
        public override void Configuration(IAppBuilder app)
        {
            base.Configuration(app);
        }
    }
}

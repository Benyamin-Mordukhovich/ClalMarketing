using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace Server.Controllers
{
    public class CorsHeaderAttribute : Attribute, IActionFilter
    {

        public async Task<HttpResponseMessage> ExecuteActionFilterAsync(HttpActionContext actionContext, CancellationToken cancellationToken, Func<Task<HttpResponseMessage>> continuation)
        {
            var res = await  continuation();
            res.Headers.Add("Access-Control-Allow-Origin", "*");
            return res;
        }

        public bool AllowMultiple
        {
            get { return false; }
        }
    }
}
using Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Umbraco.Web.WebApi;

namespace Server.Controllers
{
    public class ContactController : UmbracoApiController
    {
        [HttpPost]
        public IHttpActionResult Submit(ContactFormModel model)
        {
            //! currently the model arrives as expected.
            /// figure out what do I need to do with the data.
            if (!ModelState.IsValid)
            {
                var errors = new { success = false , error = "Something went wrong."};
                return Json(errors);
            }
            var m = model;

            var successJsonObject = new { success = true };
            
            return Ok(successJsonObject);
        }
    }
}
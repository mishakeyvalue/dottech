using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace dottech.web.Auth
{
    public class MyAuthFilterAttribute : ActionFilterAttribute
    {
        private const string AuthControllerName = "/backoffice/auth";
        private readonly string AuthCookieKey = "miau";

        public override void OnActionExecuting(ActionExecutingContext context)
        {
            if (!IsAuthorized(context.HttpContext.Request.Cookies))
            {
                context.Result = new RedirectToActionResult("Index", "AutorizationBackoffice", "");                
                return;
            }
            base.OnActionExecuting(context);
        }
        

        private bool IsAuthorized(IRequestCookieCollection cookies)
        {
            return cookies.TryGetValue(AuthCookieKey, out string hash)
                ? IsValidCookieHash(hash)
                : false;
        }

        private bool IsValidCookieHash(string hash)
        {
            return hash == "qwerty".GetMD5();
        }
    }
}

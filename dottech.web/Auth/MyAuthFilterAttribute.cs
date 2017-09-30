using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Http;
using static dottech.web.Auth.AuthHelper;

namespace dottech.web.Auth
{
    public class MyAuthFilterAttribute : ActionFilterAttribute
    {
        private readonly IAuthService authService;

        public MyAuthFilterAttribute(IAuthService authService)
        {
            this.authService = authService;
        }

        public override void OnActionExecuting(ActionExecutingContext context)
        {
            if (!IsAuthorized(context.HttpContext.Request.Cookies))
            {
                context.Result = new RedirectToActionResult("Index",
                    "AutorizationBackoffice",
                    new { redirect = context.HttpContext.Request.Path});                
                return;
            }
            base.OnActionExecuting(context);
        }        

        private bool IsAuthorized(IRequestCookieCollection cookies)
        {
            return cookies.TryGetValue(AuthCookieKey, out string hash)
                ? authService.IsValidHash(hash)
                : false;
        }
    }
}

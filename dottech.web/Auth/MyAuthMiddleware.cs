using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;
using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;

namespace dottech.web.Auth
{
    public class MyAuthMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly IAuthHelper _authHelper;

        public MyAuthMiddleware(RequestDelegate next, IAuthHelper authHelper)
        {
            _next = next;
            _authHelper = authHelper;
        }
            
        public string LoginPage { get; private set; } = "/backoffice/auth";
        public string CookieAuthKey { get; } = "miau";

        public async Task Invoke(HttpContext httpContext)
        {
            var context = new RouteContext(httpContext);
            var h = context.Handler.Method;
            if (!IsAuthorized(httpContext))
                httpContext.Response.Redirect($"{LoginPage}?redirect={httpContext.Request.Path}");
            await _next(httpContext);
        }

        private bool IsAuthorized(HttpContext context)
        {

            return  
                (context.Request.Cookies.TryGetValue(CookieAuthKey, out string value) 
                    ? _authHelper.IsValidCredentials(value)
                    : false);
        }

        private bool IsForAuthZone(ActionContext context)
        {
            return false;
        }       

        private bool IsValidCredential(string value)
        {
            return value == GetAuthHash();
        }

        private string GetAuthHash()
        {
            return "qwerty".GetMD5();
        }
    }

    public static class MyAuthMiddlewareExtensions
    {
        public static IApplicationBuilder UseMyAuth(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<MyAuthMiddleware>();
        }
    }
}

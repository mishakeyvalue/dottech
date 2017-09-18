using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dottech.web.Auth
{
    public class MyAuthMiddleware
    {
        private readonly RequestDelegate _next;

        public MyAuthMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public string LoginPage { get; private set; } = "/backoffice/auth";
        public string PassMD5 { get; private set; }
        public string LoginMD5 { get; private set; }
        public string CookieAuthKey { get; private set; }

        public async Task Invoke(HttpContext context)
        {
            if (IsAuthNeeded(context))
                context.Response.Redirect(LoginPage);
            await _next(context);
        }

        private bool IsAuthNeeded(HttpContext context)
        {
            return context.Request.Cookies.TryGetValue(CookieAuthKey, out string value) 
                ? IsValidCredential(value)
                : false;
        }

        private bool IsValidCredential(string value)
        {
            return value == GetAuthHash();
        }
    }

    public static class HashHelper
    {
        public static string GetMD5(this string input)
        {
            // Use input string to calculate MD5 hash
            using (System.Security.Cryptography.MD5 md5 = System.Security.Cryptography.MD5.Create())
            {
                byte[] inputBytes = System.Text.Encoding.ASCII.GetBytes(input);
                byte[] hashBytes = md5.ComputeHash(inputBytes);

                // Convert the byte array to hexadecimal string
                StringBuilder sb = new StringBuilder();
                for (int i = 0; i < hashBytes.Length; i++)
                {
                    sb.Append(hashBytes[i].ToString("X2"));
                }
                return sb.ToString();
            }
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

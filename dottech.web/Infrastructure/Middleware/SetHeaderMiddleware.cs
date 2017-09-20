using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace dottech.web.Infrastructure
{
    internal class SetAuthorHeaderMiddleware
    {
        public static string AuthorName;
        private readonly RequestDelegate _next;
        private const string AuthorKey = "Author";

        public SetAuthorHeaderMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            context.Response.Headers.Add(AuthorKey, AuthorName);
            await _next(context);
        }
    }
    public static class SetHeaderMiddleware
    {
        public static IApplicationBuilder SetAuthorToHeader(this IApplicationBuilder builder, string author)
        {
            SetAuthorHeaderMiddleware.AuthorName = author;
            return builder.UseMiddleware<SetAuthorHeaderMiddleware>();
        }
    }
}

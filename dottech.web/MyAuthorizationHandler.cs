using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;

namespace dottech.web
{
    internal class MyAuthorizationHandler : IAuthorizationHandler
    {
        public Task HandleAsync(AuthorizationHandlerContext context)
        {
            return Task.CompletedTask;
        }
    }
}
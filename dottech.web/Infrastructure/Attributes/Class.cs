using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dottech.web.Infrastructure.Attributes
{
    public class MyAuthAttribute : ActionFilterAttribute
    {
        public string LoginPage { get; private set; } = "/backoffice/auth";

        public override void OnActionExecuting(ActionExecutingContext context)
        {
            context.HttpContext.Response.Redirect($"{LoginPage}?redirect={context.HttpContext.Request.Path}");
        }
    }
}

using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using dottech.web.Auth;
using static dottech.web.Auth.AuthHelper;

namespace dottech.web.Controllers.Backoffice
{
    [Route("/backoffice/auth")]
    public class AutorizationBackofficeController : Controller
    {
        private readonly IAuthService authService;

        public string LoginViewPath { get; } = "~/Views/Backoffice/Login.cshtml";

        public AutorizationBackofficeController(IAuthService authService)
        {
            this.authService = authService;
        }

        [HttpGet]
        public IActionResult Index(string redirect)
        {
            return View(LoginViewPath, redirect);
        }

        [HttpPost]
        public IActionResult Login(string pass, string redirect)
        {
            if (authService.IsValidPassword(pass))
            {
                AuthorizeByCookies(pass);
                return Redirect(redirect);
            }
            return Unauthorized();
        }

        private void AuthorizeByCookies(string pass)
        {
            Response.Cookies.Append(AuthCookieKey, pass.GetMD5());
        }
    }
}
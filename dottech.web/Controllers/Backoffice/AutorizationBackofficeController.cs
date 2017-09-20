using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;

namespace dottech.web.Controllers.Backoffice
{
    [Route("/backoffice/auth")]
    public class AutorizationBackofficeController : Controller
    {
        public string LoginViewPath { get; } = "~/Views/Backoffice/Login.cshtml";

        private readonly IAuthHelper _authHelper;

        public AutorizationBackofficeController(IAuthHelper authHelper)
        {
            _authHelper = authHelper;
        }

        [HttpGet]
        public IActionResult Index(string redirect)
        {
            return View(LoginViewPath, redirect);
        }

        [HttpPost]
        public IActionResult Login(string pass, string redirect)
        {
            if (_authHelper.IsValidPass(pass))
                return Redirect(redirect);
            return Unauthorized();
        }
    }
}
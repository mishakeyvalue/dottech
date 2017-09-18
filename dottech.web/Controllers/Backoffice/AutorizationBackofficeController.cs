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
        public async Task<IActionResult> Index()
        {
            return View();
        }
    }
}
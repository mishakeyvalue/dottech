using dottech.core.Infrastructure;
using dottech.core.Services;
using Microsoft.AspNetCore.Mvc;
using dottech.web.ViewModels;
using System.Collections.Generic;
using dottech.web.Auth;

namespace dottech.web.Controllers
{
    [TypeFilter(typeof(MyAuthFilterAttribute))]
    public class HomeController : Controller
    {
        private readonly IThoughtService _thoughtService;

        public HomeController(IThoughtService thoughtService)
        {
            _thoughtService = thoughtService;
        }
        public IActionResult Index()
        {
            var viewModel = GetHomeViewModel();
            return View(viewModel);
        }

        private HomePageViewModel GetHomeViewModel()
        {
            return new HomePageViewModel()
            {
                Feed = GetFeed()
            };
        }

        private IEnumerable<ThoughtViewModel> GetFeed()
        {
            return _thoughtService.GetAll().Map<IEnumerable<ThoughtViewModel>>();
        }
    }
}

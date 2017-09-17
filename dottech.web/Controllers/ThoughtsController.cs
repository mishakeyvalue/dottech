using dottech.core.Services;
using dottech.core.Infrastructure;
using dottech.web.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace dottech.web.Controllers
{
    
    public class ThoughtsController : Controller
    {
        private readonly IThoughtService _thoughtService;

        public ThoughtsController(IThoughtService thoughtService)
        {
            _thoughtService = thoughtService;
        }

        [HttpGet("[controller]/{URI}")]
        public IActionResult Index([FromRoute] string URI)
        {
            var viewModel = _thoughtService.Get(URI).Map<ThoughtViewModel>();
            return View(viewModel);
        }

    }
}

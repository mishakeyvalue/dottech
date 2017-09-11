using dottech.core.Models;
using dottech.core.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace AspCoreServer.Controllers
{
    [Route("api/[controller]")]
    public class ThoughtController : Controller
    {
        private readonly IThoughtService _thoughtService;

        public ThoughtController(IThoughtService thoughtService)
        {
            _thoughtService = thoughtService;
        }

        [HttpGet]
        public IEnumerable<ThoughtModel> Thoughts()
        {
            return _thoughtService.GetAll();
        }

        [HttpGet]
        public ThoughtModel Thoughts(Guid id)
        {
            return _thoughtService.Get(id);
        }

        [HttpDelete]
        public IActionResult Thoughts(Guid id)
        {
            _thoughtService.Delete(id);
            return Ok();
        }

    }
}

using dottech.core.Services;
using dottech.core.Infrastructure;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using dottech.web.ViewModels;
using dottech.core.Models;
using System;

namespace dottech.web.Controllers.Backoffice
{
    [Route("backoffice/thoughts")]
    public class ThoughtsBackofficeController : Controller
    {
        private readonly string BackofficeRoomViewPath = "~/Views/Backoffice/Room.cshtml";
        private readonly string CreateViewPath = "~/Views/Backoffice/Create.cshtml";

        private readonly IThoughtService _thoughtService;

        public ThoughtsBackofficeController(IThoughtService thoughtService)
        {
            _thoughtService = thoughtService;
        }

        [HttpGet]
        public IActionResult All()
        {
            var thoughts = _thoughtService.GetAll();
            var viewModel = GetBackofficeRoomViewModel(thoughts);
            return View(BackofficeRoomViewPath, viewModel);
        }

        private BackofficeRoomViewModel GetBackofficeRoomViewModel(IEnumerable<ThoughtModel> thoughts)
        {
            return new BackofficeRoomViewModel()
            {
                Thoughts = thoughts
            };
        }

        [HttpGet("[action]")]
        public IActionResult Create()
        {
            return View(CreateViewPath);
        }

        [HttpPost]
        public IActionResult Create(ThoughtCreateModel model)
        {
            var thought = GetNewThought(model);
            _thoughtService.Create(thought);
            return RedirectToAction("All");
        }

        private ThoughtModel GetNewThought(ThoughtCreateModel model)
        {
            return new ThoughtModel()
            {
                Id = Guid.NewGuid(),
                Title = model.Title,
                Body = model.Body,
                CreationDate = DateTime.Now
            };
        }

        [HttpGet("{id}")]
        public IActionResult Get()
        {
            return Ok("WTF");
        }
    }
}

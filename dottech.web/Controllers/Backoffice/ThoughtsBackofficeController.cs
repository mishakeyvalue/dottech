using dottech.core.Services;
using dottech.core.Infrastructure;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using dottech.web.ViewModels;
using dottech.core.Models;
using System;
using Microsoft.AspNetCore.Authorization;
using dottech.web.Infrastructure.Attributes;

namespace dottech.web.Controllers.Backoffice
{
    [MyAuth]
    [Route("backoffice/thoughts")]
    public class ThoughtsBackofficeController : Controller
    {
        private readonly string BackofficeRoomViewPath = "~/Views/Backoffice/Room.cshtml";
        private readonly string EditViewPath = "~/Views/Backoffice/Edit.cshtml";

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
        public IActionResult Delete(Guid id)
        {
            _thoughtService.Delete(id);
            return RedirectToAction("All");
        }

        [HttpGet("[action]")]
        public IActionResult Edit(Guid id)
        {
            var thought = id == Guid.Empty
                ? CreateModel
                : _thoughtService.Get(id).Map<ThoughtEditModel>();
            return View(EditViewPath, thought);
        }

        private ThoughtEditModel CreateModel {
            get {
                return new ThoughtEditModel()
                {
                    Id = Guid.NewGuid(),
                    CreationDate = DateTime.Now
                };
            }
        }

        [HttpPost("[action]")]
        public IActionResult Edit([FromForm] ThoughtEditModel model)
        {
            var thought = model.Map<ThoughtModel>();
            _thoughtService.Save(thought);            
            return RedirectToAction("All");
        }


        private ThoughtModel MapToModel(ThoughtEditModel model)
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

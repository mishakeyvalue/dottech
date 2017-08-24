using Xunit;
using System;
using System.Collections;
using System.Collections.Generic;
using dottech.core.Models;
using dottech.core.Services;
using dottech.core.Infrastructure;
using dottech.core.Persistence;
using milab.DAL.Repositories;

namespace dottech.tests
{
    public class ThoughtService_CRUD_Tests
    {
        public ThoughtService_CRUD_Tests()
        {
            AutomapperInitializer.Initialize();
        }
        [Fact]
        public void ThoughtService_CreateThought_GetAllContainsIt()
        {
            // arrange
            IThoughtService service = GetServiceInstance();
            ThoughtModel thought = GetRandomThought();

            // act
            service.Create(thought);

            // assert
            Assert.Contains(service.GetAll(), t => t.Id == thought.Id);
        }

        [Fact]
        public void ThoughtService_CreateThought_GetContainsIt()
        {
            // arrange
            IThoughtService service = GetServiceInstance();
            ThoughtModel thought = GetRandomThought();

            // act
            service.Create(thought);

            // assert
            Assert.Equal(service.Get(thought.Id).Id, thought.Id);
        }

        [Fact]
        public void ThoughtService_DeleteThought_GetAllDoesntContainsIt()
        {
            // arrange
            IThoughtService service = GetServiceInstance();
            ThoughtModel thought = GetRandomThought();

            // act
            service.Create(thought);
            Assert.Contains(service.GetAll(), t => t.Id == thought.Id);
            service.Delete(thought.Id);

            // assert
            Assert.DoesNotContain(service.GetAll(), t => t.Id == thought.Id);
        }

        [Fact]
        public void ThoughtService_UpdateThought_TitlesAreEquals()
        {
            // arrange
            string dummyTitle = "I love bananas!";
            IThoughtService service = GetServiceInstance();
            ThoughtModel thought = GetRandomThought();

            // act
            thought = service.Create(thought);
            thought.Title = dummyTitle;
            thought = service.Update(thought);

            // assert
            Assert.Equal(dummyTitle, thought.Title);
        }

        private ThoughtModel GetRandomThought()
        {
            var model = new ThoughtModel()
            {
                Id = Guid.NewGuid()
            };
            return model;
        }

        private IThoughtService GetServiceInstance()
        {
            IRepository<ThoughtEntity> repo = new InMemoryRepository<ThoughtEntity>();
            return new ThoughtService(repo);
        }

    }
}

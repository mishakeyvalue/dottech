using Xunit;
using System;
using System.Collections;
using System.Collections.Generic;
using dottech.core.Models;
using dottech.core.Services;

namespace dottech.tests
{
    public class ThoughtService_CRUD_Tests
    {
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
            Assert.Equal(service.Get(thought.Id), thought);
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
            throw new NotImplementedException();
        }

    }
}

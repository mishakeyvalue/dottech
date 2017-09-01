using Xunit;
using System;
using System.Collections.Generic;
using dottech.core.Validators;
using dottech.core.Models;

namespace dottech.tests
{
    public class Validators_Tests
    {
        public static  IEnumerable<object> OldDateTimes => new object[]
        {
            new object[]{DateTime.MinValue},
            new object[]{new DateTime(100, 1, 1) },
        };

        [Theory]
        [MemberData(nameof(OldDateTimes))]
		public void ThoughtValidator_GivenOldDate_ValidationFails(DateTime oldDateTime)
        {
            // arrange
            ThoughtModel dummyThough = GetDummyThought(oldDateTime);
            Func<DateTime> getDateTime = () => DateTime.Now;
            IValidator<ThoughtModel> validator = new ThoughtValidator(getDateTime);

			// act
            bool validationResult = validator.IsValid(dummyThough);

            // assert
            Assert.False(validationResult);
        }

        private ThoughtModel GetDummyThought(DateTime time)
        {
            return new ThoughtModel()
            {
                CreationDate = time
            };
        }
    }
}

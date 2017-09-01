using System;
using dottech.core.Models;

namespace dottech.core.Validators
{
    public class ThoughtValidator : IValidator<ThoughtModel>
    {
        private readonly Func<DateTime> _getCurrentDate;

        public ThoughtValidator(Func<DateTime> getCurrentDate)
        {
            _getCurrentDate = getCurrentDate;
        }
        public bool IsValid(ThoughtModel thought)
        {
            return _getCurrentDate() <= thought.CreationDate;
        }
    }
}

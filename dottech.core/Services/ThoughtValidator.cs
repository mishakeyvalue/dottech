using System;
using System.Threading;
using dottech.core.Models;

namespace dottech.core.Services
{
    public class ThoughtValidator : IValidator<ThoughtModel>
    {
        private readonly Func<DateTime> _getDateTime;

        public ThoughtValidator(Func<DateTime> getDateTime)
        {
            _getDateTime = getDateTime;
        }
        public bool IsValid(ThoughtModel thought)
        {
            return _getDateTime() <= thought.CreationDate;
        }
    }
}

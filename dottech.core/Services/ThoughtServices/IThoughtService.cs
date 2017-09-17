using System;
using dottech.core.Models;
using System.Collections.Generic;

namespace dottech.core.Services
{
    public interface IThoughtService
    {
        ThoughtModel Create(ThoughtModel thought);

        IEnumerable<ThoughtModel> GetAll();

        ThoughtModel Get(Guid id);

        ThoughtModel Get(string URI);

        ThoughtModel Save(ThoughtModel thought);

        void Delete(Guid id);
    }
}

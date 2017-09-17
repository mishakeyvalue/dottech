using System;
using System.Collections.Generic;
using dottech.core.Infrastructure;
using dottech.core.Models;
using dottech.core.Persistence;
using milab.DAL.Repositories;
using System.Linq;

namespace dottech.core.Services
{
    public class ThoughtService : IThoughtService
    {
        private readonly IRepository<ThoughtEntity> _thoughtRepository;

        public ThoughtService(IRepository<ThoughtEntity> thoughtRepository)
        {
            _thoughtRepository = thoughtRepository;
        }
        public ThoughtModel Create(ThoughtModel thought)
        {
            var entity = thought.Map<ThoughtEntity>();
            var result = _thoughtRepository.Add(entity);
            return result.Map<ThoughtModel>();
        }

        public IEnumerable<ThoughtModel> GetAll()
        {
            return _thoughtRepository.GetAll().Where(e => !e.IsDisabled).Map<IEnumerable<ThoughtModel>>();
        }

        public ThoughtModel Get(Guid id)
        {
            return _thoughtRepository.Get(id).Map<ThoughtModel>();
        }

        public ThoughtModel Get(string URI)
        {
            return _thoughtRepository
                .GetAll()
                .First(t => !t.IsDisabled && t.URI == URI)
                .Map<ThoughtModel>();
        }

        public ThoughtModel Save(ThoughtModel thought)
        {
            var entity = thought.Map<ThoughtEntity>();
            ThoughtEntity result = _thoughtRepository.Save(entity);
            return result.Map<ThoughtModel>();
        }

        public void Delete(Guid id)
        {
            var entity = _thoughtRepository.Get(id);
            entity.IsDisabled = true;
            _thoughtRepository.Save(entity);
        }
    }
}

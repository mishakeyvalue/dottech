using AutoMapper;
using dottech.core.Models;
using dottech.core.Persistence;

namespace dottech.core.Infrastructure
{
    internal class ThoughtAutomapperProfile : Profile
    {
        public ThoughtAutomapperProfile()
        {
            CreateMap<ThoughtModel, ThoughtEntity>();
            CreateMap<ThoughtEntity, ThoughtModel>();
        }
    }
}
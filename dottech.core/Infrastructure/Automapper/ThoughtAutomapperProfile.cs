using AutoMapper;
using dottech.core.Models;
using dottech.core.Persistence;

namespace dottech.core.Infrastructure
{
    public class ThoughtAutomapperProfile : Profile
    {
        public ThoughtAutomapperProfile()
        {
            CreateMap<ThoughtModel, ThoughtEntity>()
                .ForMember(dst => dst.IsDisabled, o => o.Ignore());

            CreateMap<ThoughtEntity, ThoughtModel>();
        }
    }
}
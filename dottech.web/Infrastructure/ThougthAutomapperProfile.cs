using AutoMapper;
using dottech.core.Models;
using dottech.web.ViewModels;

namespace dottech.web.Infrastructure
{
    public class ThoughtAutomapperProfile : Profile
    {
        public ThoughtAutomapperProfile()
        {
            CreateMap<ThoughtModel, ThoughtEditModel>();
            CreateMap<ThoughtEditModel, ThoughtModel>();

            CreateMap<ThoughtModel, ThoughtViewModel> ();

        }
    }
}

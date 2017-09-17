using AutoMapper;
using dottech.core.Models;
using dottech.web.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dottech.web.Infrastructure
{
    public class ThoughtAutomapperProfile : Profile
    {
        public ThoughtAutomapperProfile()
        {
            CreateMap<ThoughtModel, ThoughtEditModel>();
            CreateMap<ThoughtEditModel, ThoughtModel>();

        }
    }
}

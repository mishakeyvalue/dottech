using AutoMapper;

namespace dottech.web.Infrastructure
{
    public static class AutomapperInitializer
    {
        public static void Initialize()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.AddProfile<ThoughtAutomapperProfile>();
                cfg.AddProfile<core.Infrastructure.ThoughtAutomapperProfile>();
            });

            Mapper.AssertConfigurationIsValid();
        }
    }
}

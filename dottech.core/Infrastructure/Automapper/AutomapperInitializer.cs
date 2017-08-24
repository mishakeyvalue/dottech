using AutoMapper;

namespace dottech.core.Infrastructure
{
    public static class AutomapperInitializer
    {
        public static void Initialize()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.AddProfile<ThoughtAutomapperProfile>();
            });

            Mapper.AssertConfigurationIsValid();
        }
    }
}

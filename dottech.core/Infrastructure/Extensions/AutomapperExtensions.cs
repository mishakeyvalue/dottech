using AutoMapper;

namespace dottech.core.Infrastructure
{
    public static class AutoMapperExtensions
    {
        public static T Map<T>(this object obj) where T : class
        {
            return Mapper.Map<T>(obj);
        }
    }

}

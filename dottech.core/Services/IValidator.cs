using dottech.core.Models;

namespace dottech.core.Services
{
    public interface IValidator<in T>
    {
        bool IsValid(T thought);
    }
}

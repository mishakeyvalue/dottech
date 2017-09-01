namespace dottech.core.Validators
{
    public interface IValidator<in T>
    {
        bool IsValid(T thought);
    }
}

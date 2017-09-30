namespace dottech.web.Auth
{
    public interface IAuthService
    {
        bool IsValidHash(string hash);
        bool IsValidPassword(string password);
    }
}

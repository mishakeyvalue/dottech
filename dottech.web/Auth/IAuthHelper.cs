namespace dottech.web
{
    public interface IAuthHelper
    {
        bool IsValidCredentials(string cookieValue);
        bool IsValidPass(string pass);
    }


}

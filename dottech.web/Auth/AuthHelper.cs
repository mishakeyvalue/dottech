namespace dottech.web
{
    public class AuthHelper : IAuthHelper
    {
        public string CredentialHash { get; } = "qwerty".GetMD5();

        public bool IsValidCredentials(string cookieValue)
        {
            return cookieValue == CredentialHash;
        }

        public bool IsValidPass(string pass)
        {
            return pass.GetMD5() == CredentialHash;
        }
    }


}

namespace dottech.web.Auth
{
    public class AuthService : IAuthService
    {
        private string PasswordHash => "qwerty".GetMD5();
        public bool IsValidHash(string h) => h == PasswordHash;

        public bool IsValidPassword(string p) => p.GetMD5() == PasswordHash;
    }
}

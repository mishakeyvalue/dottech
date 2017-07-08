const fs = require('fs');
var bcrypt = require('bcrypt-nodejs');

const CREDENTIALS_FILE = "./data/_cr.json";

function setupCredentials() {
    var opts = require('optimist').options({
        login: {
            demand: true,
            alias: 'l',
            description: 'your login'
        },
        pass: {
            demand: true,
            alias: 'p',
            description: 'your password'
        }
    }).boolean('allow_discovery').argv;

    let salt = bcrypt.genSaltSync(144);

    let passHash = bcrypt.hashSync(opts.pass, salt);

    let authModel = {
        login: opts.login,
        pass: passHash
    };

    fs.writeFileSync(CREDENTIALS_FILE, JSON.stringify(authModel));
}

function getCredentials(){
    return JSON.parse(fs.readFileSync(CREDENTIALS_FILE));
}

if (require.main == module){
    setupCredentials();
};


module.exports = {
    CREDENTIALS_FILE: CREDENTIALS_FILE,
    isValidCredentials: function (login, pass) {
        let actualCredentials = getCredentials();
        return login == actualCredentials.login 
            && bcrypt.compareSync(pass, actualCredentials.pass);
    }
}



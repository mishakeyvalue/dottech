/**
 * This script is used to configure:
 * 1) Dependencies
 * 2) Connection string
 * 3) Login / password to the admin panel
 */

const fs = require('fs');
var bcrypt = require('bcrypt-nodejs');

const CONFIG_FILENAME = "./_c.json";

function setup() {
    var opts = require('optimist').options({
        login: {
            demand: true,
            alias: 'l',
            long: 'login',
            description: 'your login'
        },
        pass: {
            demand: true,
            alias: 'p',
            long: 'password',
            description: 'your password'
        },
        connectionString: {
            demand: true,
            alias: 'c',
            long: 'connectionString',
            description: 'your default DB connection string'
        }
    }).boolean('allow_discovery').argv;

    let salt = bcrypt.genSaltSync(144);

    let passHash = bcrypt.hashSync(opts.pass, salt);

    let configModel = {
        login: opts.login,
        pass: passHash,
        cs: opts.connectionString
    };

    fs.writeFileSync(CONFIG_FILENAME, JSON.stringify(configModel));
}

function getCredentials(){
    return JSON.parse(fs.readFileSync(CONFIG_FILENAME));
}

if (require.main == module){
    setup();
};


module.exports = {
    isValidCredentials: function (login, pass) {
        let actualCredentials = getCredentials();
        return login == actualCredentials.login 
            && bcrypt.compareSync(pass, actualCredentials.pass);
    },
    getConnectionString: function(){
        return JSON.parse(fs.readFileSync(CONFIG_FILENAME)).cs;
    }
}



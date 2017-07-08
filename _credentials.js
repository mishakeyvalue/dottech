const fs = require('fs');
var bcrypt = require('bcrypt-nodejs');

const CR_FILE = "./data/_cr.json";

var opts = require('optimist').options({
        login: {
            demand: true,
            alias: 'l',
            description: 'port to listen to'
        },
        pass: {
            demand: true,
            alias: 'p'
        }
    }).boolean('allow_discovery').argv;

let salt = bcrypt.genSaltSync(144);

let passHash = bcrypt.hashSync(opts.pass, salt);

let authModel = {
    login: opts.login,
    pass: passHash
};

fs.writeFileSync(CR_FILE, JSON.stringify(authModel));


module.exports = {
    CR_FILE: CR_FILE
}



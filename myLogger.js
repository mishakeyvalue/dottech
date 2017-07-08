const fs = require('fs');
const LOG_FILE_NAME = 'myLog.txt';

const myLogger = {
    middleware: middleware,
    log: log,
    getLogFile: (cb) => {
        fs.readFile(LOG_FILE_NAME, 'utf8', function (err, data) {
            if (err) {
                cb(err);
            }
            cb(data);
        });
    }
};
function middleware(req, res, next) {
    let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    log(`REQ from ${req.connection.remoteAddress} to ${fullUrl}`);
    next();
};

function log(msg) {
    let logMsg = `[${getDateTime()}] ` + `[${msg}]\n`;
    logToFile(logMsg);
};

//----------------- PRIVATE -------

function getDateTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return day + ":" + month + ":" + year + "||" + hour + ":" + min + ":" + sec;

};



function logToFile(data) {
    fs.appendFile(LOG_FILE_NAME, data, function (err) {
        if (err) throw err;
    });
};
logToFile('Hello world at ' + getDateTime() + '\n');
//----------------- ------- -------


module.exports = myLogger;
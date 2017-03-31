const file_s = require('./files');
const os = require("os");
const hostname = os.hostname();
const bodyParser = require('body-parser');

const express = require('express');
let app = express();
app.set('view engine', 'ejs');
app.use('/assets', function(req, res, next) {
    console.log("assets were asked: " + req.url)
    express.static('public/assets')(req, res, next);
});

app.get("/", h_index);
app.get("/fileman/*", h_fileman);

// create application/x-www-form-urlencoded parser 
let urlencodedParser = bodyParser.urlencoded({ extended: false })
app.post("/todo", urlencodedParser, function(req, res) {
    console.log(req.body);
    res.end("Done.")
});

function h_index(req, res) {
    console.log(req.url)
    res.render('index')
};

function h_fileman(req, res) {
    let route = '/' + req.params['0'];
    console.log(route);
    let dir_content = file_s.get_dir(route);
    let content = {
        host: app.settings,
        dirs: dir_content.dirs,
        files: dir_content.files
    }
    res.render('fileman', { content: content });
}
app.listen(3000);
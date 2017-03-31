const http = require('http');
const file_s = require('./files');
const os = require("os");
const hostname = os.hostname();

const express = require('express');
let app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", h_index);
app.get("/fileman/*", h_fileman);


function h_index(req, res) {
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
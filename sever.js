let http = require('http');
let get_page = require('./page')
let file_s = require('./files')
var os = require("os");
const hostname = os.hostname();


let server = http.createServer(function(req, res) {
    console.log('Request to: ' + req.url)
        //---

    try {
        if (file_s.isFile(req.url)) {
            res.writeHead(200, {
                'content-type': file_s.get_content_type(req.url),
            });
            res.end(file_s.readFile(req.url))
        } else {
            let dir_content = file_s.get_dir(req.url);
            let page = get_page(hostname, dir_content.dirs, dir_content.files)
            res.writeHead(200, {
                'content-type': 'text/html;',
            });
            res.end(page)
        }

    } catch (err) {
        res.writeHead(404, {
            'content-type': 'text/html;',
        });
        res.end(err.message)
    }

    //---


});
server.listen(3000)
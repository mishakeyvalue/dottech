const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://mi:mi@ds060749.mlab.com:60749/shelveit');

// creating a schema
let shelveItSchema = new mongoose.Schema({
    item: String
});

let Shelveit = mongoose.model('Shelveit', shelveItSchema);

let item1 = Shelveit({ item: "LoL" }).save(function(err) {
    if (err) throw err;
    console.log("Added");
});


let data = [{ item: "vk.com" }, { item: "sportwiki.com" }]
let urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('shelveIt', { d: data });
    });

    app.post('/', urlencodedParser, function(req, res) {
        console.log("Handling POST request..")
        console.log(req.body);
        data.push(req.body);

        res.render('shelveIt', { d: data });


    });

    app.post('/del', urlencodedParser, function(req, res) {
        res.end("deleted.")
    });
};
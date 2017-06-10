const express = require('express');

let app = express();
let PORT = 5555;
// configure my app
app.set('view engine', 'ejs');
app.use(express.static('public'))

// Fire up Controllers
app.get('/', (req, res) =>{
    res.render('index');
});

app.listen(PORT); console.log("App is listening on the port " + PORT);
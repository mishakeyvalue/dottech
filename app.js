const express = require('express');

let app = express();
// configure my app
app.set('view engine', 'ejs');
app.use(express.static('public'))


app.get('/', (req, res) =>{
    res.render('index');
});
// Fire up Controllers

app.listen(5555);
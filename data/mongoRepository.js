const fs = require('fs');
const mongoose = require('mongoose');

let _connectionString = fs.readFileSync(__dirname + "/_cs.txt", 'utf8');
mongoose.connect(_connectionString);
let db = mongoose.connection;

module.exports = db;
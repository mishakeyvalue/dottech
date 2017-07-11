const fs = require('fs');
const mongoose = require('mongoose');
const _configManager = require('../_configManager');

let _connectionString = _configManager.getConnectionString();
mongoose.connect(_connectionString);
let db = mongoose.connection;

module.exports = db;
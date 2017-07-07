let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let Page = new Schema({
    title: String,
    url: { type: String, index: { unique: true } },
    content: String,
    menuIndex: Number,
    date: Date
});

Page = mongoose.model('Page', Page);
module.exports = Page;
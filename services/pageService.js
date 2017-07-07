const db = require('../data/mongoRepository');
const Page = require('../models/page');

const pageService = {
    getPage: function (cb) {
        Page.find(cd)
    },

    add: function (title, url, content) {
        var page = new Page({
            title: title,
            url: url,
            content: content,
            menuIndex: 123,
            date: new Date(Date.now())
        });

        page.save((err)=>{
            if(err) throw err;
        })
    }
};

module.exports = pageService;
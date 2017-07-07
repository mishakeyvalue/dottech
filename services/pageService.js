const db = require('../data/mongoRepository');
const Page = require('../models/page');

const pageService = {

    getAll: getAll_F,

    add: add_F
};

/**
 * 
 * @param {*string} title 
 * @param {*string} url 
 * @param {*string} content 
 * @param {*number} menuIndex 
 */
function add_F(title, url, content, menuIndex) {
    var page = new Page({
        title: title,
        url: url,
        content: content,
        menuIndex: menuIndex,
        date: new Date(Date.now())
    });

    page.save((err) => {
        if (err) throw err;
    })
};

/**
 * 
 * @param {*function} cb 
 */
function getAll_F(cb) {
    Page.find(cb);
}
module.exports = pageService;
const db = require('../data/mongoRepository');
const Page = require('../models/page');

const pageService = {
    /**
     * 
     * @param {*string} title 
     * @param {*string} url 
     * @param {*string} content 
     * @param {*number} menuIndex 
     */
    add: function (title, url, content, menuIndex, cb) {
        var page = new Page({
            title: title,
            url: url,
            content: content,
            menuIndex: menuIndex,
            date: new Date(Date.now())
        });

        page.save((err) => {
            cb(err, page);
        })
    },

    /**
     * 
     * @param {*function} cb 
     */
    getAll: function (cb) {
        Page.find(cb);
    },
    get: function(id, cb){
        Page.findOne({_id: id}, cb);
    },
    getByUrl: function(url, cb){
        Page.findOne({url: url}, cb);
    },
    delete: function(id, cb){
        Page.remove({_id: id}, cb);
    },  
    
};

;



module.exports = pageService;
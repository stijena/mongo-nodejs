var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
    hash : String,
    title : String,
    site : String,
    alternateTitles : [
        { hash : String, title : String, date: Date, score : Number, userId : String }
    ]
})

module.exports = mongoose.model('Article', articleSchema);

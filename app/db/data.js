var Article = require('../models/article');

module.exports = {
    getArticle : function(hash) {
        return Article.findOne({hash : hash}).exec();
    }
}
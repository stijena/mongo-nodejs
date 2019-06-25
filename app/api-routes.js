// Filename: api-routes.js
// Initialize express router
let router = require('express').Router();

var Article = require('./models/article');

router.get('/', function (req, res) {
    res.json({
       status: 'API Its Working',
       message: 'Welcome to RESTHub crafted with love!'
    });
});

router.get('/article/:site', function (req, res) {
    
});

router.post('/article/create', function (req, res) {
    var article = new Article();

    console.log(req);
    article.hash = req.body.hash;
    article.title = req.body.title;
    
    var alternateTitle = {};
    alternateTitle.hash = "";
    alternateTitle.title = req.body.alternateTitle;
    alternateTitle.score = 0;
    
    article.alternateTitles.push(article);

    article.save(function(err) {
        if (err){
            console.log('Error in saving Article: '+err);    
            throw err;  
        }
        console.log('Article saved');
    });
});

module.exports = router;
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {status: 'success', title: 'HackerbayUniversity'});
});

router.get('/data', function(req, res, next) {
    var va = {va: 'i am umar'};
    res.render('data', va);
});

router.post('/data', function (req, res, next) {
    res.redirect('data', va);
});

module.exports = router;

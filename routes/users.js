var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/* GET users login. */
router.get('/login', function (req, res, next) {
  res.render('login',{title:"User - Login"});
});
module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Aroma Shop - Home' });
});
/* GET  page. */
router.get('/:page', function (req, res, next) {
  let page = req.params.page;
  let bannerTexts = {
    blog:"Our Blog",
    category: "Shop Category"
  }
  res.render(page, { title: 'Aroma Shop - ' + page, bannerText: bannerTexts[page] });
});
module.exports = router;

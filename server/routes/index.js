const express = require('express');
const router = express.Router();

const pageName = '';
const pageTitle = 'Home';
const ogImage = '';

router.get('/', function(req, res, next) {
  res.render('index', {
    ogImage,
    ogTitle: pageTitle,
    pageTitle: `${pageTitle} — CHRISVOGT.me`,
  });
});

module.exports = router;

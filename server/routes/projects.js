const express = require('express');
const router = express.Router();

const META = require('../../data/meta.json');

router.get('/', (req, res, next) => {
  res.render('index', {
    ogTitle: 'PROJECTS',
    ogImage: 'https://image',
    pageTitle: `PAGE TITLE`
  });
});

router.get('/:slug', function(req, res, next) {
  const { params: { slug } } = req;
  const project = META.projects[slug] || {};
  res.render('index', {
    ogTitle: project.name,
    ogImage: project.banner_url,
    pageTitle: `${project.name} — CHRISVOGT.me`
  });
});

module.exports = router;

const express = require('express');
const router = express.Router();

const firebase = require('firebase-admin');

router.get('/', (req, res, next) => {
  res.render('index', {
    ogTitle: 'PROJECTS',
    ogImage: 'https://image',
    pageTitle: `PAGE TITLE`
  });
});

router.get('/:slug', function(req, res, next) {
  const { params: { slug } } = req;
  const database = firebase.database();
  try {
    database.ref('/projects').once('value').then(snapshot => {
      const projects = snapshot.val();
      const project = projects[slug] || {};

      res.render('index', {
        ogTitle: project.name,
        ogImage: project.banner_url,
        pageTitle: `${project.name} — CHRISVOGT.me`
      });
    });
  } catch(error) {
    console.log(error);
  }
});

module.exports = router;

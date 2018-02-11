const express = require('express');
const router = express.Router();
const firebase = require('firebase-admin');

router.get('/', (req, res, next) => {
  const database = firebase.database();
  try {
    database.ref('/projects').once('value').then(snapshot => {
      const projects = snapshot.val();
      res.status(200).json(projects);
    });
  } catch(error) {
    console.log(error);
  }
});

module.exports = router;

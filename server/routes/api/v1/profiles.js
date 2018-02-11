const express = require('express');
const router = express.Router();
const firebase = require('firebase-admin');

router.get('/', (req, res, next) => {
  const database = firebase.database();
  try {
    database.ref('/profiles').once('value').then(snapshot => {
      const profiles = snapshot.val();
      res.status(200).json(profiles);
    });
  } catch(error) {
    console.log(error);
  }
});

module.exports = router;

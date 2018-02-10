#!/usr/bin/env node

const fs = require('fs');
const log = require('./lib/log');

const ACTION_MESSAGE = 'converting placeholder variables to EJS template tags'
const filepath = 'build/index.ejs';

fs.readFile(filepath, 'utf8', function(err, fileContents) {
  if (err) {
    log(ACTION_MESSAGE, 'error');
    throw err;
  }

  const templateTags = [
    { from: '__OG_TITLE__', to:'ogTitle' },
    { from: '__OG_IMAGE__', to: 'ogImage' },
    { from: '__PAGE_TITLE__', to: 'pageTitle' }
  ];
  const wrapTag = tag => `<%= ${tag} %>`;

  let output = fileContents;
  
  templateTags.map(({from, to}) => {
    output = output.replace(from, wrapTag(to));
  });

  fs.writeFile(filepath, output, err => {
    if (err) {
      log(ACTION_MESSAGE, 'error');
      throw err;
    }

    log(ACTION_MESSAGE, 'success');
  })
});

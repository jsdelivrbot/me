#!/usr/bin/env node

const fs = require('fs');
const log = require('./lib/log');

const ACTION_MESSAGE = 'converting markup files to EJS';

fs.rename('build/index.html', 'build/index.ejs', err => {
  if (err) {
    log(ACTION_MESSAGE, 'error');
    throw err;
  }

  log(ACTION_MESSAGE, 'success');
});

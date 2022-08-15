#!/usr/bin/env node

const open = require('open');
const ora = require('ora');

const doSearchQuery = async (args, url) => {
  const searchUrl = url + args;

  const spinner = ora(searchUrl).start();

  await open(searchUrl);

  setTimeout(() => {
    spinner.succeed();
  }, 350);
};

module.exports = doSearchQuery;

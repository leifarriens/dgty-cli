#!/usr/bin/env node

const minimist = require('minimist');

const doSearchQuery = require('../index');

(async () => {
  let args = minimist(process.argv.slice(2))['_'].join('+');
  doSearchQuery(args, 'https://www.twitch.tv/');
})();

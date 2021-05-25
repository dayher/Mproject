const helpers = {};
const moment = require('moment');

helpers.timeago = timestamp => {
  return moment(timestamp).startOf('minute').fromNow();
};

module.exports = helpers;

var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/api');

mongoose.Promise = Promise;

module.exports.Outreach = require("./outreach")
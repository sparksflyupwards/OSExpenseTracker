var express = require('express');
var router = express.Router();
var db = require('../models')
var helpers = require('./helpers/outreach')

router.route('/')
.get(helpers.getOutreaches)
.post(helpers.createOutreach)

router.route('/:outreachId')
.get(helpers.getOutreachById)
.put(helpers.updateOutreachById)
.delete(helpers.deleteOutreachById)


module.exports = router;
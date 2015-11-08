var express = require('express');
var router = express.Router();

//Get all customers
// this actually goes to api/customers
router.get('/', function(req, res) {
  res.send('/invoices route');

});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'}); 
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'}); 
});

/* GET About Me page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me'}); 
});

/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects'}); 
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services'}); 
});

/* GET Contact Me page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Me'}); 
});

router.post("/contact", function (req, res) {
  res.redirect("127.0.0.1:3000/home");
  response = {
    fname: req.query.fname,
    lname: req.query.lname,
    email: req.query.email,
    phoneNumber: req.query.phoneNumber,
    txtMessage: req.query.txtMessage
  };

  console.log(response);
  res.end(JSON.stringify(response));
 
});
module.exports = router;

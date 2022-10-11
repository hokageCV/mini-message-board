var express = require('express');
var router = express.Router();

function addDate(){
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var today  = new Date();
  return today.toLocaleDateString("hi-IN", options)
}

const messages = [
  {
    user: "kakashi",
    text: "Did you read the book",
    added: addDate()
  },
  {
    user: "Shikamaru",
    text: "yeah, it was useful",
    added: addDate()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

// new message form page
router.get('/new', function(req, res, next) {
  res.render('form', { title: "add new message", messages: messages });
});
router.post('/new', function(req, res, next) {
  
  messages.push({
    text: req.body.msgText, 
    user: req.body.username,
    added: addDate()
  })
  res.redirect('/') // after adding data, redirect to home page
} );


module.exports = router;

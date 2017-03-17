var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Wrong url bitch' });
});

var status = process.env.NODE_ENV || 'development';



// router.post('/secret', function (req, res) {
//   var secret = req.body.secret;
//   res.end('Password: ' + secret);
// });



// Query
router.get('/secret*', function (req, res) {
  var key = req.query.key;
  // Do methods here

  console.log("ENV: "+status);
  res.json({ user: 'if youre seeing this kev, this may be the end...', env: status} );



  res.end('Password: ' + key);

});


module.exports = router;

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req,res,next){
  var renderValues = {};
  renderValues.emailHasError = '';
  renderValues.txtEmail = '';
  renderValues.pswdHasError = '';
  renderValues.errorMsgClass = '';
  renderValues.errorMsgs = [];
  res.render('users/login', renderValues);
});

router.post('/login', function(req, res, next){
  var renderValues = {};
  renderValues.emailHasError = '';
  renderValues.txtEmail = req.body.txtEmail;
  renderValues.pswdHasError = '';
  renderValues.errorMsgClass = '';
  renderValues.errorMsgs = [];

  //console.log(req.body); //mirar los datos que se enviaron por post
  if (req.body.txtEmail === 'italo@gmail.com') {
    if (req.body.txtPassword === '12345') {
      req.session.logged = true;
      req.session.useremail = req.body.txtEmail;
      res.redirect('/');
      return;
    }else {
      renderValues.pswdlHasError = 'has-error';
      renderValues.errorMsgClass = 'alert alert-danger';
      renderValues.errorMsgs.push('Credenciales Incorrectos');
    }
  }else {
    renderValues.emailHasError = 'has-error';
    renderValues.errorMsgClass = 'alert alert-danger';
    renderValues.errorMsgs.push('Credenciales Incorrectos');
  }

  res.render('users/login', renderValues); //si no funciona
  //res.redirect('/'); //si funciona
});

module.exports = router;

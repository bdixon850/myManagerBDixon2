const express = require('express');
const router = express.Router();
const passport = require('../passport');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);

/* GET users listing. */
router.post('/signup', (req, res, next) => {
  passport.authenticate('local-signup', function (error, user, info) {
    if (error) {
      return res.status(500).json({
        message: error
      });
    }

    req.logIn(user, function (error) {
      if (error) {
        return res.status(statusCode).json({
          message: error
        })
      }

      return res.json({
        message: 'Ok',
        isAuthenticated: true
      })
    });
  })(req, res, next)


});

router.post('/signin', function (req, res, next) {

  passport.authenticate('local-signin', function (error, user, info) {
    if (error) {
      return res.status(500).json({
        message: error
      });
    }

    req.logIn(user, function (error) {
      if (error) {
        return res.status(statusCode).json({
          message: error
        })
      }

      return res.json({
        message: 'Ok',
        isAuthenticated: true
      })
    });
  })(req, res, next)
});
//Custom Passport Callback
// passport.authenticate('local-signin', function (error, user, info) {


//   if (error) {
//     return res.status(500).json({
//       message: error || 'Oops something happened!',
//     });
//   }

//   //Persistnet login
//   req.logIn(user, function (error) {
//     if (error) {
//       return res.status(500).json({
//         message: error || 'Oops something happened',
//       });
//     }
//     user.isAuthenticated = true;
//     return res.json(user);
//   });

//(req, res, next);
// });
router.get('/api', (req, res) => {
  const username = req.user;
  res.json({
    message: 'Hello World'
  });
});


module.exports = router;

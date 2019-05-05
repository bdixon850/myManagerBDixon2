const Strategy = require('passport-local').Strategy;
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);


const SignupStrategy = new Strategy(function (username, password, done) {
    User.findOne({ username }).exec((err, user) => {
        if (err) {
            return done('Internal server error', null);
        }// 
        if (user) {
            return done('User already excists', null);
        }


        const encryptedPassword = bcrypt.hashSync(password, salt);
        let newUser = new User({
            username,
            password: encryptedPassword

        });

        newUser.save((error, inserted) => {
            if (error) {
                return done('Internal error', null)
            }

            return done(null, inserted);
        });
    });
});

module.exports = SignupStrategy;


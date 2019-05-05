const Strategy = require('passport-local').Strategy;
const User = require('../models/user');
const bcrypt = require('bcryptjs');


const LoginStrategy = new Strategy(function (username, password, done) {
    User.findOne({ username }).lean().exec((err, user) => {
        if (err) {
            return done(err, null);
        }
        if (!user) {
            return done('No user found!', null);
        }


        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) {
            return done('username or Password not Valid', null);
        }
        return done(null, user);
    });
});

module.exports = LoginStrategy;


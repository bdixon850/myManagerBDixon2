const express = require('express');
const PORT = process.env.PORT || 8080;
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./config/keys').mongoURI;
const passport = require('passport');
const users = require('./routes/api/users');
const stripe = require('stripe')('sk_test_20MQcHKiDiettG9cfMdTDcRM00h29hfI4A');

app.use(require('body-parser').text());


// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get('*', (req, res) => {
      res.sendFile(path.resolve(_dirname, 'client', 'build', 'index.html'));
  })
}

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// Routes
app.use('/api/users', users);

// Connect to Mongo DB
mongoose.connect(db, { useNewUrlParser: true})
    .then(() => {
        console.log('Successfully connected to Mongo DB')
    })
    .catch((err) => {
        console.log('Error', err)
    })


app.post('/charge', async (req, res) => {
    try {
        let { status } = await stripe.charges.create({
            amount: 2000,
            currency: "usd", 
            description: "An example charge", 
            source: req.body
        });

        res.json({status});
    }   catch (err) {
        res.status(500).end();
    }
});




app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})
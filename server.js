const express = require('express');
const PORT = process.env.PORT || 8080;
const mongoose = require('mongoose');
const app = express();
const db = require('./models');
const stripe = require('stripe')('sk_test_20MQcHKiDiettG9cfMdTDcRM00h29hfI4A');

app.use(require('body-parser').text());


// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/myManager")
    .then(() => {
        console.log('Successfully connected to Mongo DB')
    })
    .catch((err) => {
        console.log('Error', err)
    })

db.Contractor.create({ name: "Morgan", email: "morgan@gmail.com", occupation: "Painter", price: 3.75})
    .then((dbContractor) => {
        console.log(dbContractor)
    })
    .catch((err) => {
        console.log(err);
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


require('./routes/api-routes')(app);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})
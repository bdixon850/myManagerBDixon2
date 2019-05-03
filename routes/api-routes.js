const axios = require('axios');
const path = require('path');
const db = require('../models');
require('dotenv').config();

module.exports = (app) => {
    app.get('/api/contractors', (req, res) => {
        db.Contractor.find()
            .then((contractorsData) => {
                res.json(contractorsData)
            })
            .catch((err) => {
                res.json({error: err})
            })
    })

    app.post('/search', (req, res) => {
        let occupation = req.body.occupation.replace(/\s/g, "+");
        // let search = req.body.Contractor
        axios.get(db.Contractor)
            .then((response) => {
                res.json(response.data.occupation)
            })
            .catch((err) => {
                res.json({error: err})
            })
    })

    app.post('/api/contractor', (req, res) => {
        db.Contractor.create(req.body)
            .then((response) => {
                res.json({successful: response})
            })
            .catch((err) => {
                res.json({error: err})
            })
    })

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build/index.html'))
    });
}
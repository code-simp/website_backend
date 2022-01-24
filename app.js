const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
var cors = require('cors');
const User = require('./models/userSchema')

mongoose.connect('mongodb+srv://admin-tarun:Tarunnexus9@maincluster.pgzzp.mongodb.net/myWebsite', { useNewUrlParser: true })

const app = express();
app.use(bodyParser.json())
app.use(cors({ origin: 'http://localhost:3000' }));

app.post('/contact', function (req, res) {

    const user = new User({
        name: req.body.name,
        email: req.body.email
    })

    user.save()

    res.status(200).json(user)
})

app.listen(8000, function () {
    console.log('app started on port 8000')
})

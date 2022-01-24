const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({ origin: 'http://localhost:3000' }));

app.get('/', function (req, res) {
    res.send('works')
})

app.post('/contact', (req, res) => {
    console.log(req.body)
    res.send('success')
})

app.listen(8000, function () {
    console.log('app started on port 8000')
})

const express = require('express')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json)

app.get('/', function (req, res) {
    res.send('works')
})

app.post('/contact', (req, res) => {
    console.log(req)
    res.send('success')
})

app.listen(8000, function () {
    console.log('app started on port 3001')
})

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const publicPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 3010;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(publicPath));
app.get('/', (req, res) => {
    res.send(path.join(publicPath, 'index.html'))
});

const dataPath = 'data/users.json';
app.get('/abc', (req, res) => {
    //res.send('welcome to the development api-server');
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        //console.log(data);
        res.send(JSON.parse(data));
    });
});

//require('./routes/routes.js')(app, fs);
app.listen(port, () => {
    console.log('server is up');
})
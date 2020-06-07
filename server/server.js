const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const compression = require('compression');
const publicPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 3010;
require('./routes/routes.js')(app, fs);

app.use(bodyParser.json());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(publicPath));
app.get('/', (req, res) => {
    res.send(path.join(publicPath, 'index.html'))
});


app.listen(port, () => {
    console.log('server is up');
})
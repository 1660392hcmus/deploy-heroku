var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const sumRouter = require('./routers/sum');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded());
// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

app.use('/sum', sumRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
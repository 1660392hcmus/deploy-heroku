var express = require('express');
var app = express();

app.set('view engine', 'ejs');

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
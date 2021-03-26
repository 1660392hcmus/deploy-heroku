var express = require('express');
const cookieSession = require('cookie-session');
const authMiddleware = require('./middlewares/auth');

var app = express();

// router
var bodyParser = require('body-parser');
const sumRouter = require('./routers/sum');
const loginRouter = require('./routers/auth');
const todoRouter = require('./routers/todo');

// SESSION
app.use(cookieSession({
  name: 'session', 
  keys: [process.env.COOKIE_KEY || 'secret'],
  maxAge: 24 * 60 * 60 * 1000,
}))

app.use(authMiddleware);
app.use(express.static(__dirname + '/assets'));

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded());
// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

app.get('/view', (req, res) => {
  req.session.views = (req.session.views || 0) + 1;
  res.send(`seen ${req.session.views}`); 
})

app.use('/sum', sumRouter);
app.use('/auth', loginRouter);
app.use('/todo', todoRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
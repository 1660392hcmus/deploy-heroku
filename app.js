var express = require('express');
const cookieSession = require('cookie-session');
const expressLayouts = require('express-ejs-layouts');
const authMiddleware = require('./middlewares/auth');
const todoModel = require('./models/todo');
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
// .use(function(req, res, next){
//   if (typeof(req.session.todoList) == 'undefined') {
//       req.session.todoList = [];
//   }
//   next();
// })

app.use(expressLayouts);
app.use(authMiddleware);
app.use(express.static(__dirname + '/assets'));

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
// index page
app.get('/', function(req, res) {
    res.redirect('/auth/login');
    res.render('auth/login');
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
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const ensureLoggedIn = require('../middlewares/ensure_logged_in');

router.use(ensureLoggedIn);
 
router.use((req, res, next) => {
  res.locals.title = "Sum two number";
  next();
});


router.get('/', function(req, res){
    res.render('todo/index');
  })
  
router.post('/', function(req, res){
const num1 = Number(req.body.num1);
const num2 = Number(req.body.num2);
const result = num1 + num2;
res.render('sum/resultSum', {num1, num2, result});
})

module.exports = router;
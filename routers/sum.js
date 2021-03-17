const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.render('sum/sum');
  })
  
router.post('/', function(req, res){
const num1 = Number(req.body.num1);
const num2 = Number(req.body.num2);
const result = num1 + num2;
// res.send(`Tổng 2 số là ${num1} và ${num2} là ${result}`);
res.render('sum/resultSum', {num1, num2, result});
})

module.exports = router;
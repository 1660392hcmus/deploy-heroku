const express = require('express');
const router = express.Router();
const Users =  require('../models/user');

router.get('/login', function(req, res){
    res.render('auth/login');
});

router.post('/login', function(req, res){
    const {email, password} = req.body;
    const found = Users.findByEmail(email);
    if (found && found.password == password){
        req.session.userId = found.id;
        res.redirect('/sum');
    } else {
        res.render('auth/login');
    }
});

router.get('/logout', (req, res) => {
    delete req.session.userId;
    res.redirect('/sum');
})

module.exports = router;
const express = require('express');
const router = express.Router();
const Users =  require('../models/user');
const todoModel = require('../models/todo');

router.get('/login', function(req, res){
    res.render('auth/login');
});

router.post('/login', function(req, res){
    const {email, password} = req.body;
    const found = Users.findByEmail(email);
    if (found && found.password == password){
        req.session.userId = found.id;
        res.redirect('/todo');
    } else {
        res.render('auth/login');
    }
});

router.get('/logout', (req, res) => {
    delete req.session.userId;
    delete req.session.todoList;
    todoModel.clearList();
    res.redirect('login');
    console.log("🚀 ~ file: auth.js ~ line 27 ~ router.get ~ req.session.todoList", req.session.todoList)
})

module.exports = router;
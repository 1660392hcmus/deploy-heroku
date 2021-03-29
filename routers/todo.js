const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../middlewares/ensure_logged_in');
const todoModel = require('../models/todo');

router.use(ensureLoggedIn);

router.get('/', function(req, res){
  if(!req.session.todoList){
    req.session.todoList = todoModel.getNewTodoList();
  }
  console.log("🚀 ~ file: todo.js ~ line 13 ~ router.get ~ req.session.todoList", req.session.todoList)

    res.render('todo/index', {todoList: req.session.todoList});
  })

router.post('/', function(req, res){
  const {myTodo} = req.body;
  todoModel.addTodo(myTodo);
  req.session.todoList = todoModel.todoList;  
  res.render('todo/index', {todoList: req.session.todoList});
});

router.post('/remove', function(req,res){
  const {id} = req.body;
})

module.exports = router;
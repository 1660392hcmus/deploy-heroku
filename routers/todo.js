const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../middlewares/ensure_logged_in');
const todoModel = require('../models/todo');
const db = require('../models/db');
router.use(ensureLoggedIn);
const app = express();
// router.get('/', function(req, res){
//   if(!req.session.todoList){
//     req.session.todoList = todoModel.getNewTodoList();
//   }
//     res.render('todo/index', {todoList: req.session.todoList});
//   })

// router.post('/', function(req, res){
//   const { myTodo } = req.body;
//   todoModel.addTodo(myTodo);
//   req.session.todoList = todoModel.todoList;  
//   res.render('todo/index', {todoList: req.session.todoList});
// });

// router.post('/remove', function(req,res){
//   const {id} = req.body;
// })

router.get("/", (req, res) => {
  // res.render('todo/index', {todos: []});
  db.select("*")
    .from("task")
    .then(data => {
    console.log("🚀 ~ file: todo.js ~ line 31 ~ router.get ~ data", data)
      res.render("todo/index", { todos: data });
    })
    .catch(err => res.status(400).json(err));
});

// create new task
router.post('/addTask', (req, res) => {
  const { textTodo } = req.body;
  db("task")
    .insert({ task: textTodo })
    .returning("*")
    .then(todo => {
      res.redirect("/todo");
    })
    .catch(err => {
      res.status(400).json({ message: "unable to create a new task" });
    });
});

router.put("/moveTaskDone", (req, res) => {
  const { name, id } = req.body;

  if (name === "todo") {
    db("task")
      .where("id", "=", id)
      .update("status", 1)
      .returning("status")
      .then(task => {res.json(task[0])});
  } else {
    db("task")
      .where("id", "=", id)
      .update("status", 0)
      .returning("status")
      .then(task => {res.json(task[0])});
  }
});


module.exports = router;
app.use(function(req, res, next){
    if (typeof(req.session.todoList) == 'undefined') {
        req.session.todoList = [];
    }
    next();
})
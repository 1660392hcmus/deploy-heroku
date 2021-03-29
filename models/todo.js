const todoList = [];

const findByName = (name) => {
    return todoList.find(name => todoList.name === name);
}

const findById = (id) => {
    return todoList.find(id => todoList.id === id);
}

const addTodo = (name) => {
    const newTodo = {
        id: todoList.length,
        name: name,
        complete: false
    }
    return todoList.push(newTodo);
}

const getNewTodoList = () => {
    return todoList;
}

const clearList = () => {
    return todoList;
}

const todoModel = {todoList, findById, findByName, addTodo, getNewTodoList, clearList};
module.exports = todoModel;
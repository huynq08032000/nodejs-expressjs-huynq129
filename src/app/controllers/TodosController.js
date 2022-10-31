const Todo = require("../models/Todo")

class TodosController {
    // [GET] /todos
    index(req, res, next) {
        Todo.find({})
            .then(todos => res.json(todos))
            .catch(next);
    }

    // [GET] /todos/:id
    getTodoById(req, res, next) {
        Todo.findOne({ _id: req.params.id })
            .then(todo => res.json({
                message: 'Get todo success',
                todo: todo
            }))
            .catch(next)
    }

    // [POST] /todos
    createNewTodo(req, res, next) {

    }
}

module.exports = new TodosController;
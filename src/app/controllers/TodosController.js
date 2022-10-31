const Todo = require("../models/Todo")

class TodosController {
    // [GET] /todos
    index(req, res, next) {
        Todo.find({})
            .then(todos => res.json(todos))
            .catch(next);
    }

    // [POST] /todos
    createNewTodo(req, res, next) {
        const todo = new Todo(req.body)
        todo.save()
            .then(() => res.json({
                message: 'Add new todo success',
                data: todo
            }))
            .catch(next)

    }

    // [GET] /todos/:id
    getTodoById(req, res, next) {
        Todo.findById(req.params.id)
            .then(todo => res.json({
                message: 'Get todo success',
                todo: todo
            }))
            .catch(next)
    }

    // [PATCH] /todos/:id
    updateTodoById(req, res, next) {
        Todo.updateOne({ _id: req.params.id }, req.body)
            .then(() => {
                Todo.findById(req.params.id)
                    .then(todo => res.json({
                        message: 'Get todo success',
                        todo: todo
                    }))
                    .catch(next)
            })
            .catch(next)
    }

    // [DELETE] /todos/:id
}

module.exports = new TodosController;
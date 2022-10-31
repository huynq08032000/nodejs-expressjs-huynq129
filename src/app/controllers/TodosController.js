const Todo = require("../models/Todo")
const status = require("http-status")
class TodosController {
    // [GET] /todos
    index(req, res, next) {
        Todo.find({})
            .then(todos => res.json({
                statusCode: 200,
                data: todos
            }))
            .catch(next);
    }

    // [POST] /todos
    createNewTodo(req, res, next) {
        const todo = new Todo(req.body)
        todo.save()
            .then(() => res.json({
                statusCode: 200,
                message: 'Add new todo success',
                data: todo
            }))
            .catch(next)

    }

    // [GET] /todos/:id
    getTodoById(req, res, next) {
        Todo.findById(req.params.id)
            .then(todo => res.json({
                statusCode: 200,
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
                        statusCode: 200,
                        message: 'Update todo success',
                        todo: todo
                    }))
                    .catch(next)
            })
            .catch(next)
    }

    // [DELETE] /todos/:id

    deleteTodoById(req, res, next) {
        Todo.deleteOne({ _id: req.params.id })
            .then(() => {
                res.json({
                    statusCode: 200,
                    message: 'Delete todo success'
                })
            })
            .catch(next)
    }
}

module.exports = new TodosController;
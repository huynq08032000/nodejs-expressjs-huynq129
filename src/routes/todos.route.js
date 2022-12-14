const express = require('express')
const route = require('.')
const router = express.Router()

const todosController = require('../app/controllers/TodosController')

// newController.index
router.post('/', todosController.createNewTodo)
router.get('/:id', todosController.getTodoById)
router.patch('/:id', todosController.updateTodoById)
router.delete("/:id", todosController.deleteTodoById)
router.get('/', todosController.index)

module.exports = router
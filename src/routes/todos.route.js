const express = require('express')
const route = require('.')
const router = express.Router()

const todosController = require('../app/controllers/TodosController')

// newController.index
router.post('/', todosController.createNewTodo)
router.get('/:id', todosController.getTodoById)
router.get('/', todosController.index)

module.exports = router
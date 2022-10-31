const express = require('express')
const router = express.Router()

const todosController = require('../app/controllers/TodosController')

// newController.index

router.get('/:id', todosController.getTodoById)
router.get('/', todosController.index)

module.exports = router
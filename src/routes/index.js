const todosRouter = require('./todos.route')

const route = (app) => {

    app.use('/todos', todosRouter)

}

module.exports = route;
const mongoose = require('mongoose')

const connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost/todo_app_dev');
        console.log("connect success !!!")
    } catch (error) {
        console.log("connect fail !!!")
    }
}

module.exports = { connect };
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Todo = new Schema({
    name: { type: String },
    description: { type: String },
    check: { type: Boolean, default: false },
}, {
    timestamps : true,
})

module.exports = mongoose.model('todo_list', Todo)
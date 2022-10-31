const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const Todo = new Schema({
    _id: Number,
    name: { type: String },
    description: { type: String },
    check: { type: Boolean, default: false },
}, {
    _id: false,
    timestamps: true,
})
Todo.plugin(AutoIncrement)

module.exports = mongoose.model('todo_list', Todo)
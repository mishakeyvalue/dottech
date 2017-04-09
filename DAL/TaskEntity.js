const mongoose = require('mongoose');
const Schema = mongoose.Schema();

// Schema and model

const TaskSchema = new mongoose.Schema({
    task: String,
    done: Boolean
});

const TaskEntity = mongoose.model('tasks', TaskSchema);

module.exports = TaskEntity;
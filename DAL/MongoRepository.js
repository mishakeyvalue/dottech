const fs = require('fs');
const mongoose = require('mongoose');

let _connectionString = fs.readFileSync(__dirname + "/_connectionString.txt", 'utf8');
mongoose.connect(_connectionString);

const TaskEntity = require('./TaskEntity');



module.exports.Add = function(viewModel) {
    let task = new TaskEntity({ task: viewModel.task, done: false });

    task.save();
};

module.exports.GetCollection = function(callback) {
    TaskEntity.find({}, function(err, data) {
        callback(data);
    });
};

module.exports.ChangeStatus = function(task_id, callback, new_status) {
    console.log(task_id)
    TaskEntity.findByIdAndUpdate(task_id, { done: new_status }, function(err, result) {
        if (err) throw err;
        callback();
        console.log(`Result of updating: ${result}`)
    })
};
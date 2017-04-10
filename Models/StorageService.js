const repository = require('../DAL/MongoRepository');
const TaskCollectionViewModel = require('./TaskCollectionViewModel');

module.exports.Add = function(item) {
    if (_isValid(item)) {
        repository.Add(item);
    }
};

module.exports.GetAll = function(callback) {
    repository.GetCollection(function(data) {
        let notDone = [];
        let done = [];
        data.forEach(function(value) {
            if (value.done) {
                done.push(value);
            } else {
                notDone.push(value);
            }
        });

        let vm = new TaskCollectionViewModel(notDone, done);
        callback(vm);
    });
};

module.exports.MakeDone = function(task_id, callback) {
    repository.ChangeStatus(task_id, callback, true);
};


module.exports.MakeUndone = function(task_id, callback) {
    repository.ChangeStatus(task_id, callback, false);
};

let _isValid = function(item) {
    return true;
};
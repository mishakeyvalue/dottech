const repository = require('../DAL/MongoRepository');

module.exports.Add = function(item) {
    if (_isValid(item)) {
        repository.Add(item);
    }
};

module.exports.GetAll = function(callback) {
    return repository.GetCollection(callback);
};

module.exports.MakeDone = function(task_id, callback) {
    repository.MakeDone(task_id, callback);
};

let _isValid = function(item) {
    return true;
};
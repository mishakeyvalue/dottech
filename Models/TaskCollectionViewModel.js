module.exports = class TaskCollectionViewModel {
    constructor(notDone_collection, done_collection) {
        this.notDone = notDone_collection;
        this.done = done_collection;
    }
}
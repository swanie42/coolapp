// the to do itself

module.exports = require('mongoose').model('ToDo', {
    title: String,
    done: Boolean,
    dateCreated: {
        type: Date,
        default: new Date()
    },
    dateFinished: {
        type: Date,
        default: new Date()
    }
});

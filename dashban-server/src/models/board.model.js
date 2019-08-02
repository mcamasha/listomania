const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BoardSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lists: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('board', BoardSchema);

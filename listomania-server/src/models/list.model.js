const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    items: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('list', ListSchema);

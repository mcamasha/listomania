const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: Array,
        required: false
    }
});

module.exports = mongoose.model('listItem', ListItemSchema);

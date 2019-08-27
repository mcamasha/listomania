const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TopicSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lists: {
        type: Array,
        required: true
    },
    tags: {
        type: Array,
        required: false
    },
    isFavorite: {
        type: Boolean,
        required: true
    },
    isPrivate: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    lastVisitData: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('topic', topicSchema);

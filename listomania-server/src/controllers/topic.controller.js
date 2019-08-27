const topic = require('../models/topic.model');

/**
 * Get topic by id.
 */
module.exports.topic_details = function (req, res, next) {
    topic.findById(req.params.id, function (err, topic) {
        if (err) return next(err);
        res.send(topic);
    });
};

/**
 * Update topic by id.
 */
module.exports.topic_update = function (req, res, next) {
    topic.findByIdAndUpdate(req.params.id, { $set: req.body }, {new: true}, function (err, topic) {
        if (err) return next(err);
        res.send(topic);
    });
};

/**
 * Delete topic by id.
 */
module.exports.topic_delete = function (req, res, next) {
    topic.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    });
};

/**
 * Create topic.
 */
module.exports.topic_create = function (req, res, next) {
    const topic = {
        name: req.body.name,
        links: req.body.links
    };

    topic.create(topic, (err, topic) => {
        if (err) return next(err);

        User.findById(req.params.id, (err, user) => {
            user.topics.push(topic._id);
        });

        res.send();
    });
};

/**
 * Get all topics by userId.
 */
module.exports.topics_all = function (req, res) {
    let topics = [];

    User.findById(req.params.id, (err, user) => {
        user.topics.forEach((topicId) => {
            topic.findById(topicId, (err, topic) => {
                topics.push(topic);
            })
        })
    });

    topics =
        topics.sort((topic) => topic.lastVisitData)
            .map((topic, index) => {
                const isRecentViewed = index < 5;

                return {
                    name: topic.name,
                    backgroundColor: topic.backgroundColor,
                    isFavorite: topic.isFavorite,
                    visibility: topic.visibility,
                    isRecentViewed
                }
            });

    res.send(topics);
}

const express = require('express');
const router = express.Router();

const topic_controller = require('../controllers/topic.controller');

/**
 * Get topic by id.
 */
router.get('/:id', topic_controller.topic_details);

/**
 * Get all topics by user id.
 */
router.get('/user:id', topics_controller.topics_all);

/**
 * Create topic.
 */
router.post('/create', topics_controller.topic_create);

/**
 * Search topics.
 */
router.get('/search', topic_controller.topic_search);

/**
 * Update topic.
 */
router.put('/:id', topic_controller.topic_update);

/**
 * Delete topic by id.
 */
router.delete('/:id', topic_controller.topic_delete);

module.exports = router;
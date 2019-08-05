const express = require('express');
const router = express.Router();

const boards_controller = require('../controllers/boards.controller');

/**
 * Get all boards by user id.
 */
router.get('/user:id', boards_controller.boards_all);

/**
 * Create board.
 */
router.post('/user:id/create', boards_controller.board_create);

module.exports = router;
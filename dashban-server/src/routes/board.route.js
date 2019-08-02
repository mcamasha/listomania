const express = require('express');
const router = express.Router();

const board_controller = require('../controllers/board.controller');

/**
 * Get board by id.
 */
router.get('/:id', board_controller.board_details);

/**
 * Get all user's boards;
 */
router.get('/', board_controller.board_all_details);
/**
 * Update board by id.
 */
router.put('/:id', board_controller.board_update);

/**
 * Delete board by id.
 */
router.delete('/:id', board_controller.board_delete);

module.exports = router;
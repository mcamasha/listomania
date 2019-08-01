const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/board.controller');

/**
 * Get board by id.
 */
router.get('/:id', product_controller.board_details);

/**
 * Get all user's boards;
 */
router.get('/boards', product_controller.board_details); // replace

/**
 * Change board by id.
 */
router.put('/:id', product_controller.board_update);

/**
 * Delete board by id.
 */
router.delete('/:id', product_controller.board_delete);

module.exports = router;
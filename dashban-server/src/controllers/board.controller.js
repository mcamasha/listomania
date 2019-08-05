const Board = require('../models/board.model');

/**
 * Get board by id.
 */
module.exports.board_details = function (req, res, next) {
    Board.findById(req.params.id, function (err, board) {
        if (err) return next(err);
        res.send(board);
    });
};

/**
 * Update board by id.
 */
module.exports.board_update = function (req, res, next) {
    Board.findByIdAndUpdate(req.params.id, { $set: req.body }, {new: true}, function (err, board) {
        if (err) return next(err);
        res.send(board);
    });
};

/**
 * Delete board by id.
 */
module.exports.board_delete = function (req, res, next) {
    Board.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    });
};

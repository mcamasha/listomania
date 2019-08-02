const Board = require('../models/board.model');

/**
 * Создать запись.
 */
module.exports.board_create = function (req, res, next) {
    Board.create({
        name: req.body.name,
        links: req.body.links
    }, function (err) {
        if (err) return next(err);
        res.send('Board created successfully!');
    });
};

/**
 * Get all boards.
 */
module.exports.board_all_details = function (req, res) {    
    Board.find({}, (err, boards) => {
        res.send(boards);
    });
}

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

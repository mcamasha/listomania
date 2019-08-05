const Board = require('../models/board.model');

/**
 * Создать запись.
 */
module.exports.board_create = function (req, res, next) {
    const board = {
        name: req.body.name,
        links: req.body.links   
    };

    Board.create(board, (err, board) => {
        if (err) return next(err);

        User.findById(req.params.id, (err, user) => {
            user.boards.push(board._id);
        });

        res.send();
    });
};

/**
 * Get all boards by userId.
 */
module.exports.boards_all = function (req, res) {
    let boards = [];

    User.findById(req.params.id, (err, user) => {
        user.boards.forEach((boardId) => {
            Board.findById(boardId, (err, board) => {
                boards.push(board);
            })
        })
    });

    boards =
        boards.sort((board) => board.lastVisitData)
            .map((board, index) => {
                const isRecentViewed = index < 5;

                return {
                    name: board.name,
                    backgroundColor: board.backgroundColor,
                    isFavorite: board.isFavorite,
                    visibility: board.visibility,
                    isRecentViewed
                }
            });

    res.send(boards);
}

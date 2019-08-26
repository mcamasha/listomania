import {IBoardView} from "../Models";
import {EBoardVisibility} from "../Enums";

/**
 * Return empty model of board.
 */
export function getEmptyNewBoard(): IBoardView {
    return {
        backgroundColor: null,
        id: '',
        isFavorite: null,
        name: '',
        isRecentViewed: null,
        visibility: EBoardVisibility.PRIVATE
    }
}

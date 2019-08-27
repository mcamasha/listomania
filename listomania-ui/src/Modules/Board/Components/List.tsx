import {isEmpty, cloneDeep} from 'lodash';
import * as React from 'react';
import {useState} from 'react';
import {ICard} from '../Models';
import {ListActions} from './ListActions';

interface IProps {
    t: Function;
    title: string;
    cards?: ICard[];
    onAddCard: (listIndex: number, title: string, callback?: () => void) => void;
    onUpdateCards: (updatedCards: ICard[]) => void;
    listIndex: number;
}

export const List = (props: IProps) => {
    const {title, cards, onUpdateCards, onAddCard, listIndex} = props;

    const [isAdding, setIsAdding] = useState<boolean>(false);
    const [titleNewCard, setTitleNewCard] = useState<string>('');

    const hasCards: boolean = !isEmpty(cards);
    const addButtonTitle: string = hasCards ? 'Add another card' : 'Add card';

    const handleCardBlur = (cardIndex: number) => (event: React.FocusEvent<HTMLInputElement>): void => {
        const updatedCard: ICard = {...cards[cardIndex]};
        const updatedCards: ICard[] = cloneDeep<ICard[]>(cards);
        updatedCard.title = event.currentTarget.value;
        updatedCards[cardIndex] = updatedCard;

        onUpdateCards(updatedCards);
    };

    const handleAddCard = (): void => {
        onAddCard(listIndex, titleNewCard, () => {
            setTitleNewCard('');
            setIsAdding(false);
        });
    };

    const handleAddingToggle = (): void => {
        setIsAdding(true);
    };

    const handleChangeNewCardTitle = (event: React.FocusEvent<HTMLInputElement>) => {
        setTitleNewCard(event.target.value);
    };

    const renderCards = (): JSX.Element => {
        return (
            <div>
                {cards.map((card: ICard, index: number) => {
                    return (
                        <input
                            key={index}
                            // onClick={handleOpenCardModal}
                            disabled
                        >
                            {card.title}
                            <button>Change Icon</button>
                        </input>
                    );
                })}
            </div>
        );
    };

    const renderIsAddingBlock = (): JSX.Element => {
        return (
            <div>
                <input
                    onChange={handleChangeNewCardTitle}
                    onBlur={handleAddCard}
                    placeholder="Enter a title for this card..."
                />
                <button onClick={handleAddCard}>Add Card</button>
            </div>
        )
    };

    return (
        <div>
            <div>
                <span>{title}</span>
                <ListActions />
            </div>
            {hasCards && renderCards()}
            {isAdding ? (
                renderIsAddingBlock()
            ) : (
                <button onClick={handleAddingToggle}>{addButtonTitle}</button>
            )}
        </div>
    )
}
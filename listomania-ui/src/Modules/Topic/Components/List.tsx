import {isEmpty, cloneDeep} from 'lodash';
import * as React from 'react';
import {useState} from 'react';
import {IListItem} from '../Models';
import {ListActions} from './ListActions';

interface IProps {
    t: Function;
    name: string;
    items?: IListItem[];
    onAddItem: (listIndex: number, title: string, callback?: () => void) => void;
    onUpdateItems: (updatedCards: IListItem[]) => void;
    listIndex: number;
}

export const List = (props: IProps) => {
    const {name, items, onUpdateItems, onAddItem, listIndex} = props;

    const [isAdding, setIsAdding] = useState<boolean>(false);
    const [titleNewCard, setTitleNewCard] = useState<string>('');

    const hasItems: boolean = !isEmpty(items);
    const addButtonTitle: string = hasItems ? 'Add another item' : 'Add item';

    const handleItemBlur = (cardIndex: number) => (event: React.FocusEvent<HTMLInputElement>): void => {
        const updatedCard: IListItem = {...items[cardIndex]};
        const updatedCards: IListItem[] = cloneDeep<IListItem[]>(items);
        updatedCard.name = event.currentTarget.value;
        updatedCards[cardIndex] = updatedCard;

        onUpdateItems(updatedCards);
    };

    const handleAddCard = (): void => {
        onAddItem(listIndex, titleNewCard, () => {
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
                {items.map((item: IListItem, index: number) => {
                    return (
                        <input
                            key={index}
                            // onClick={handleOpenCardModal}
                            disabled
                        >
                            {item.name}
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
                <span>{name}</span>
                <ListActions />
            </div>
            {hasItems && renderCards()}
            {isAdding ? (
                renderIsAddingBlock()
            ) : (
                <button onClick={handleAddingToggle}>{addButtonTitle}</button>
            )}
        </div>
    )
}
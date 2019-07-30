export interface ICard {
    title: string;
    description?: string;
    comments?: string[]; //replace into IComment[]
}

export interface IList {
    title: string;
    cards?: ICard[];
}
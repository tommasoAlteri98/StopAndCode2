

export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
    date: number;
    category: string;
}

export interface PostPreferito{
    id: number;
    title: string;
}

export interface PostCategories {
    id: string,
    title: string;

}
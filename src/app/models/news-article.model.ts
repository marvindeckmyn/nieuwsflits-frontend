export interface NewsArticle {
    id: number;
    title: string;
    content: string;
    summary: string;
    authorId: number;
    publishDate: Date;
    category: string;
    imageUrl?: string;
    tags: string[]
}
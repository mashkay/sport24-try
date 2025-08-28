import { getImageUrl } from "./images";

export interface ArticleInterface {
    id: string;
    urn: string;
    title: string;
    subTitle: string;
    image: string;
}

export const fetchArticles = async (): Promise<ArticleInterface[]> => {
    const response = await fetch('/sport24-try/data/ARTICLE.json');
    const data = await response.json();
    return data.items.map((item: any) => ({
        id: item.id,
        urn: item.urn,
        title: item.title,
        subTitle: item.leadAnnouncement,
        image: getImageUrl(item),
    }));
};

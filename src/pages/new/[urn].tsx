import { useParams } from '@solidjs/router';
import { createResource, Show } from 'solid-js';
import { Content } from '../../components/Content';
import { getImageUrl } from '../images';

const fetchArticle = async (urn: string) => {
    const response = await fetch(`/data/NEWS/${urn}.json`);
    try {
        const data = await response.json();
        console.log('Valid JSON:', data);
        return data;
    } catch (error) {
        console.error('Invalid JSON:', error);
        return { error: 404 };
    }
};

const ArticleCard = (props) => {
    const image = () => getImageUrl(props.articleData);
    return (
        <div class='grid pl-4 pr-4 sm:pl-5 sm:pr-5 gap-4 sm:gap-2'>
            <Show
                when={image()}
                fallback={
                    <h1 class='text-lg sm:text-xl font-bold'>{props.articleData.title}</h1>
                }
            >
                <div class='bg-gray-200 mb-4 relative'>
                    <img class='w-full h-auto object-cover' src={image()} />
                    <h1 class='w-full text-lg sm:text-xl font-bold absolute bottom-0 left-0 p-2 bg-gradient-to-t from-black to-transparent text-white'>
                        {props.articleData.title}
                    </h1>
                </div>
            </Show>

            <h3 class='text-sm sm:text-base font-bold'>{props.articleData.leadAnnouncement}</h3>

            <Content data={props.articleData.content} />
        </div>
    );
};

export default function ArticlePage() {
    console.log('ArticlePage rendered');
    const params = useParams();
    const [article] = createResource(() => params.urn, fetchArticle);

    return (
        <div class='max-w-7xl m-auto p-4 sm:p-8'>
            <Show when={article()} fallback={<p>Loading...</p>}>
                <Show
                    when={article().error === 404}
                    fallback={<ArticleCard articleData={article()} />}
                >
                    <div class='text-center text-red-500'>Страница не найдена</div>
                </Show>
            </Show>
        </div>
    );
}

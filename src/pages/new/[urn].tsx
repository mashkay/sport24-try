import { useParams } from '@solidjs/router';
import { createResource, Show } from 'solid-js';
import { Content } from '../../components/Content';
import { getImageUrl } from '../images';

const fetchArticle = async (urn: string) => {
    const response = await fetch(`/sport24-try/data/NEWS/${urn}.json`);
    return response.json();
};

const ArticleCard = (props) => {
    const image = ()=> getImageUrl(props.articleData);
    return (
        <div class='grid pl-5 pr-5 gap-2'>
            <Show
                when={image()}
                fallback={
                    <h1 class='text-xl font-bold'>{props.articleData.title}</h1>
                }
            >
                <div class='  bg-gray-200 mb-4 relative'>
                    <img
                        class=' h-full object-cover'
                        src={image()}
                    />
                    <h1 class='w-full text-xl font-bold absolute bottom-0 left-0 p-2 bg-gradient-to-t from-black to-transparent text-white'>
                        {props.articleData.title}
                    </h1>
                </div>
            </Show>

            <h3 class="font-bold">{props.articleData.leadAnnouncement}</h3>

            <Content data={props.articleData.content} />
        </div>
    );
};

export default function ArticlePage() {
    console.log('ArticlePage rendered');
    const params = useParams();
    const [article] = createResource(() => params.urn, fetchArticle);

    return (
        <div class='max-w-7xl m-auto'>
            <Show when={article()} fallback={<p>Loading...</p>}>
                <Show when={article().material}>
                    <ArticleCard articleData={article().material} />
                </Show>
            </Show>
        </div>
    );
}

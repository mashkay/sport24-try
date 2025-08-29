import { A } from '@solidjs/router';
import { createResource, createSignal, For, Suspense } from 'solid-js';

import { fetchArticles } from './articles.data';
import { fetchNews } from './news.data';

import { NewsCard } from './news';
import { ArticleCard } from './articles';

export default function Home() {
    const [articles] = createResource(fetchArticles);
    const [news] = createResource(fetchNews);

    console.log('Home rendered', articles(), news());

    return (
        <section class="bg-gray-100 text-gray-700 p-4 sm:p-8 max-w-7xl m-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <A href="/articles">
                    <h2 class="text-xl sm:text-2xl font-bold">ARTICLES</h2>
                </A>
                <Suspense fallback={<span>Loading...</span>}>
                    <div class="grid grid-cols-1 gap-6 mt-4">
                        <For each={articles()}>
                            {(article) => <ArticleCard {...article} />}
                        </For>
                    </div>
                </Suspense>
            </div>
            <div>
                <A href="/news">
                    <h2 class="text-xl sm:text-2xl font-bold">NEWS</h2>
                </A>
                <Suspense fallback={<span>Loading...</span>}>
                    <div class="grid grid-cols-1 gap-6 mt-4">
                        <For each={news()}>
                            {(article) => <NewsCard {...article} />}
                        </For>
                    </div>
                </Suspense>
            </div>
        </section>
    );
}

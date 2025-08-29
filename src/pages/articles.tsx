import { createEffect, Suspense, createResource, For } from 'solid-js';
import { fetchArticles, ArticleInterface } from './articles.data';
import { A } from '@solidjs/router';

export const ArticleCard = (articleData: ArticleInterface) => {
    return (
        <A href={'/article/' + articleData.urn}>
            <div class='grid h-full grid-cols-2 border p-2 shadow-md hover:shadow-lg hover:scale-105 hover:ease-in-out hover:transition-all duration-100 cursor-pointer'>
                <img class='w-8/12 shadow-md' src={articleData.image} />

                <div class='flex flex-col justify-between '>
                    <A href={'/article/' + articleData.urn}>
                        <h3 class='text-lg font-semibold hover:text-gray-950 mb-2'>
                            {articleData.title}
                        </h3>
                    </A>
                    <p class='text-sm text-gray-600'>{articleData.subTitle}</p>
                </div>
            </div>
        </A>
    );
};

export default function Articles() {
    const [articles] = createResource(fetchArticles);


    return (
        <section class='bg-gray-100 text-gray-700 p-4 sm:p-8 max-w-7xl m-auto'>
            <h1 class='text-xl sm:text-2xl font-bold'>ARTICLES</h1>

            <Suspense fallback={<span>...</span>}>
                <div class='grid grid-cols-1 md:grid-cols-2 gap-6 mt-4'>
                    <For each={articles()}>
                        {(article) => <ArticleCard {...article} />}
                    </For>
                </div>
            </Suspense>
        </section>
    );
}

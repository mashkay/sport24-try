import { Suspense, type Component } from 'solid-js';
import { A, useLocation } from '@solidjs/router';

const App: Component = (props: { children: Element }) => {
    const location = useLocation();

    return (
        <>
            <nav class='bg-gray-200 text-gray-900 px-4'>
                <ul class='flex items-center'>
                    <li class='py-2 px-4'>
                        <A href='news' class='no-underline hover:underline'>
                            News
                        </A>
                    </li>
                    <li class='py-2 px-4'>
                        <A
                            href='/articles'
                            class='no-underline hover:underline'
                        >
                            Articles
                        </A>
                    </li>
                </ul>
            </nav>

            <main>
                <Suspense>{props.children}</Suspense>
            </main>
        </>
    );
};

export default App;

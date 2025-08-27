import { A } from '@solidjs/router';
import { createSignal } from 'solid-js';

export default function Home() {
    const [count, setCount] = createSignal(0);

    return (
        <section class='bg-gray-100 text-gray-700 p-8 max-w-7xl m-auto grid grid-cols-2 gap-10'>
            <A href='/news'>
                <h2 class='text-2xl font-bold'>NEWS</h2>
            </A>
            <A href='/articles'>
                <h2 class='text-2xl font-bold'>ARTICLES</h2>
            </A>
        </section>
    );
}

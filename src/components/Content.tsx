import { For, Match, Switch, Show, Suspense } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { createImageUrl } from '../pages/images';

const Block = (props) => {
    return (
        <>
            <Suspense fallback={<p>Loading...</p>}>
                <Switch>
                    <Match when={props.block.length === 1}>
                        {props.block[0]}
                    </Match>

                    <Match
                        when={
                            props.block.length === 3 && props.block[0] === 'img'
                        }
                    >
                        <img src={createImageUrl(props.block[2].src)} />
                    </Match>

                    <Match when={props.block.length === 3}>
                        <Dynamic component={props.block[0]} {...props.block[2]}>
                            <For each={props.block[1]}>
                                {(item) => <Block block={item} />}
                            </For>
                        </Dynamic>
                    </Match>
                </Switch>
            </Suspense>
        </>
    );
};

export const Content = (props) => {
    return (
        <div>
            <For each={props.data}>{(block) => Block((block = { block }))}</For>
        </div>
    );
};

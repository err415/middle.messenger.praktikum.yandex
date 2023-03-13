import { set } from '../utils/helpers';
import { EventBus } from './EventBus';
import Block from './Component';
import { User }  from '../api/AuthAPI';
import { ChatInfo } from '../api/ChatAPI';
import { Message } from '../controllers/MessageController';
type Props<P extends Record<string, unknown> = any> = { events?: Record<string, () => void> } & P;
export enum StoreEvents {
    Updated = 'updated'
}

interface State {
    user: User;
    chats: ChatInfo[];
    messages: Record<number, Message[]>;
    selectedChat?: number;
}

export class Store extends EventBus<{ [Ev: string]: unknown[] }> {
    private state: any = {};

    public set(keypath: string, data: unknown) {
        set(this.state, keypath, data);

        this.emit(StoreEvents.Updated, this.getState());
    }

    public getState() {
        return this.state;
    }
}

const store = new Store();

// @ts-ignore
window.store = store;

export function withStore<SP>(mapStateToProps: (state: State) => Props) {
    return function wrap<P>(Component: typeof Block<Props<P>>){

        return class WithStore extends Component {

            constructor(props: Omit<P, keyof SP>) {
                let previousState = mapStateToProps(store.getState());

                super({ ...(props as Props), ...previousState });

                store.attach(StoreEvents.Updated, () => {
                    const stateProps = mapStateToProps(store.getState());

                    previousState = stateProps;

                    this.setProps({ ...stateProps });
                });

            }

        }

    }
}
export default store;

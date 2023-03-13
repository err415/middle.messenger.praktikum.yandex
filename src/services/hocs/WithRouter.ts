import Block from '../../services/Component';
import Router from '../../services/Router';

export function withRouter(Component: typeof Block<any>) {
    type Props<P extends Record<string, unknown> = any> = { events?: Record<string, () => void> } & P;

    return class WithRouter extends Component {
        constructor(props: Props & PropsWithRouter) {
            super({ ...props, router: Router });
        }
    }
}

export interface PropsWithRouter {
    router: typeof Router;
}

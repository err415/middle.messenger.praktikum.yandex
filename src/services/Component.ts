import { v4 as makeUUID } from 'uuid';
import Handlebars from 'handlebars';
import { EventBus } from './EventBus';
type BlockEvents<P = any> = {

    init: [];
    'flow:component-did-mount': [];
    'flow:component-did-update': [P, P];
    'flow:render': [];
}
type Props<P extends Record<string, unknown> = any> = { events?: Record<string, () => void> } & P;

export default class Component<P extends Record<string, unknown> = any> {
    static EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_CDU: 'flow:component-did-update',
        FLOW_RENDER: 'flow:render',
    } as const;
    protected props: Props<P>;
    protected children:  Record<string, Component>;
    private id = makeUUID();
    private meta: {
        tagName: string;
        props: Props<P>;
    };
    protected element: HTMLElement | null = null;
    private eventBus: () => EventBus<BlockEvents<Props<P>>>;
    private setUpdate: boolean | undefined = false;


    constructor(tagName = 'div', propsWithChild: Props<P> = {} as Props<P>) {

        const eventBus = new EventBus<BlockEvents<Props<P>>>();

        const {props, children} = this.getChildren(propsWithChild);
        //this.id = makeUUID();
        //this._children = children;
        this.children = this.makePropsProxy(children as Props<P>) as any;
        this.props = this.makePropsProxy({...props, id: this.id});
        this.meta = {
            tagName,
            props
        };
        //this.meta = {tag, props};
        this.eventBus = () => eventBus;
        this.registerEvents(eventBus);
        eventBus.emit(Component.EVENTS.INIT);

    }
    private registerEvents(eventBus: EventBus<BlockEvents<Props<P>>>) {

        eventBus.attach(Component.EVENTS.INIT, this.init.bind(this));
        eventBus.attach(Component.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.attach(Component.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.attach(Component.EVENTS.FLOW_RENDER, this._render.bind(this));
    }
    protected init() {
        // this._createResources();
        this.element = this.createDocumentElement(this.meta?.tagName);
        this.eventBus().emit(Component.EVENTS.FLOW_RENDER);
    }
    /*private _createResources() {
        const { tagName } = this.meta;
        this._element = this.createDocumentElement(tagName);
    }*/
    private createDocumentElement(tagName: string) {
        const element = document.createElement(tagName);

        if ((this.props as Props).settings?.withInternalID)
            element.setAttribute('data-id', this.id);

        return element;
    }

    private _render() {
        const blockHTML = this.render();
        this.removeEvents();
        (this.element as HTMLElement).innerHTML = '';
        (this.element as HTMLElement).appendChild(blockHTML);
        this.addEvents();
        this.addAttribute();
    }

    protected render(): DocumentFragment {
       return new DocumentFragment();
    }

    protected addEvents() {
        const {events = {}} = this.props;

        Object.keys(events).forEach((eventName) => {
            this.element?.addEventListener(eventName, events[eventName]);
        });
    }

    protected removeEvents() {
        const {events = {}} = this.props;

        Object.keys(events).forEach((eventName) => {
            this.element?.removeEventListener(eventName, events[eventName]);
        });
    }

    protected addAttribute() {
        const {attr = {}} = this.props as Props<P> & { attr: Record<string, string> };

        Object.entries(attr).forEach(([key, value]) => {
            this.element?.setAttribute(key, value);
        });
    }

    private getChildren(propsWithChild: Props<P>): { props: Props<P>, children: Record<string, unknown>} {

        const children: Record<string, unknown>  = {};
        const props = {} as Record<string, unknown>;

        Object.keys(propsWithChild).forEach(key => {
            if (Array.isArray(key) && key.length > 0 && key.every(v => v instanceof Component)){
                children[key] = propsWithChild[key];
            } else
            if (propsWithChild[key] instanceof Component)
                children[key] = propsWithChild[key];
            else
                props[key] = propsWithChild[key];
        });
        return { props: props as Props<P>, children: children as Props<P> };
    }

    protected compile(template: string, props?: Props) {

        if (typeof (props) == 'undefined')
            props = this.props;

        const propsWithStubs = { ...props };
        Object.entries(this.children).forEach(([key, child]) => {
            if (Array.isArray(child)){
                propsWithStubs[key] = child.map(child => `<div data-id="${child.id}"></div>`);
            } else {
                propsWithStubs[key] = `<div data-id="${child.id}"></div>`;
            }

        });

        const fragment = this.createDocumentElement('template') as HTMLTemplateElement;
        fragment.innerHTML = Handlebars.compile(template)(propsWithStubs);

        Object.values(this.children).forEach(child => {

            const stub = fragment.content.querySelector(`[data-id="${child.id}"]`);
            if (stub)
                stub.replaceWith(child.getContent() as HTMLElement);
        });
        return fragment.content;
    }

    private _componentDidMount() {
        if (this.componentDidMount())
        Object.values(this.children).forEach(child => { child.dispatchComponentDidMount() });
    }

    protected componentDidMount() {
        return true;
    }

    dispatchComponentDidMount() {
        this.eventBus().emit(Component.EVENTS.FLOW_CDM);
        if (Object.keys(this.children).length)
            this.eventBus().emit(Component.EVENTS.FLOW_RENDER);
    }

    private _componentDidUpdate(oldProps: Props<P>, newProps: Props<P>) {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (response)
            this.eventBus().emit(Component.EVENTS.FLOW_RENDER);

    }

    protected componentDidUpdate(oldProps: Props<P>, newProps: Props<P>) {
        console.log(oldProps, newProps);
        return oldProps !== newProps;

    }

    getContent() {
        return this.element;
    }

    public setProps(nextProps: Props<P>) {

        const prevValue: Props<P> = { ...this.props };
        const {children, props} = this.getChildren(nextProps);
        this.setUpdate = false;

        if (!nextProps)
            return;

        if (Object.values(children).length)
            Object.assign(this.children, children);

        if (Object.values(props).length)
            Object.assign(this.props, props);

        if (this.setUpdate) {
            this.eventBus().emit(Component.EVENTS.FLOW_CDU, prevValue, this.props);
            this.setUpdate = false;
        }
    }

    private makePropsProxy(props: Props<P>) {

        return new Proxy(props, {

            get(target, prop: string | symbol) {
                const value = target[prop as string];
                return typeof value === 'function' ? value.bind(target) : value;
            },

            set: (target, prop: string | symbol, value) => {

                if (target[prop as keyof Props<P>] !== value)
                {
                    target[prop as keyof Props<P>] = value;
                    this.setUpdate = true;
                }

                return true;
            },
        });
    }
    protected show() {
        (this.getContent() as HTMLElement).style.display = 'block';
    }

    protected hide() {
        (this.getContent() as HTMLElement).style.display = 'none';
    }

}


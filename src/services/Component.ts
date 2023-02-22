import { v4 as makeUUID } from 'uuid';
import Handlebars from 'handlebars';
import { EventBus } from './EventBus';

export default class Component<TypeProps extends Record<string, any> = any> {
    static EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_CDU: 'flow:component-did-update',
        FLOW_RENDER: 'flow:render',
    } as const;
    protected props: TypeProps;
    protected children:  Record<string, any>;
    private id = makeUUID();
    private meta: {
        tagName: string;
        props: any;
    };
    protected element: HTMLElement | null = null;
    private eventBus: () => EventBus;
    private setUpdate: boolean | undefined = false;


    constructor(tagName: string = 'div', propsWithChild: any = {}) {

        const eventBus = new EventBus();

        const {props, children} = this.getChildren(propsWithChild);
        //this.id = makeUUID();
        //this._children = children;
        this.children = this.makePropsProxy(children);
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
    private registerEvents(eventBus: EventBus) {

        eventBus.attach(Component.EVENTS.INIT, this.init.bind(this));
        eventBus.attach(Component.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.attach(Component.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this) as any);
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

        if (this.props.settings?.withInternalID)
            element.setAttribute('data-id', this.id);

        return element;
    }

    private _render() {
        const blockHTML = this.render();
        this.removeEvents();
        this.element!.innerHTML = '';
        this.element!.appendChild(blockHTML);
        this.addEvents();
        this.addAttribute();
    }

    protected render(): DocumentFragment {
       return new DocumentFragment();
    }

    protected addEvents() {
        const {events = {}} = this.props as TypeProps & { events: Record<string, () => {}> };

        Object.keys(events).forEach((eventName) => {
            this.element?.addEventListener(eventName, events[eventName]);
        });
    }

    protected removeEvents() {
        const {events = {}} = this.props as TypeProps & { events: Record<string, () => {}> };

        Object.keys(events).forEach((eventName) => {
            this.element?.removeEventListener(eventName, events[eventName]);
        });
    }

    protected addAttribute() {
        const {attr = {}} = this.props as TypeProps & { attr: Record<string, string> };

        Object.entries(attr).forEach(([key, value]) => {
            this.element?.setAttribute(key, value);
        });
    }

    private getChildren(propsWithChild: TypeProps) {

        const children: Record<string, Component>  = {};
        const props: Record<string, any> = {};

        Object.keys(propsWithChild).forEach(key => {
            if (propsWithChild[key] instanceof Component)
                children[key] = propsWithChild[key];
            else
                props[key] = propsWithChild[key];
        });
        return { props, children };
    }

    protected compile(template: string, props?: any) {

        if (typeof (props) == 'undefined')
            props = this.props;

        const propsWithStubs = { ...props };
        Object.entries(this.children).forEach(([key, child]) => {
            propsWithStubs[key] = `<div data-id="${child.id}"></div>`;

        });

        const fragment = this.createDocumentElement('template') as HTMLTemplateElement;
        fragment.innerHTML = Handlebars.compile(template)(propsWithStubs);

        Object.values(this.children).forEach(child => {

            const stub = fragment.content.querySelector(`[data-id="${child.id}"]`);
            if (stub)
                stub.replaceWith(child.getContent()!);
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

    protected dispatchComponentDidMount() {
        this.eventBus().emit(Component.EVENTS.FLOW_CDM);
        if (Object.keys(this.children).length)
            this.eventBus().emit(Component.EVENTS.FLOW_RENDER);
    }

    private _componentDidUpdate(oldProps: TypeProps, newProps: TypeProps) {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (response)
            this.eventBus().emit(Component.EVENTS.FLOW_RENDER);

    }

    protected componentDidUpdate(oldProps: TypeProps, newProps: TypeProps) {
        console.log(oldProps, newProps);
        return oldProps !== newProps;

    }

    /*setProps(newProps) {
        if (!newProps)
            return;

        const {children, props } = this.getChildren(newProps);

        if (Object.values(children).length)
            Object.assign(this._children, children);
        if (Object.values(props).length)
            Object.assign(this._props, props);
    }*/
    protected getContent() {
        return this.element;
    }

    public setProps(nextProps: TypeProps) {

        const prevValue: TypeProps = { ...this.props };
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

    /*makePropsProxy(props) {
        return new Proxy(props, {
            get(target, prop) {
                const value = target[prop];
                return typeof value === 'function' ? value.bind(target) : value;
            },
            set: (target, prop, newValue) => {
                const oldValue = { ...target };
                target[prop] = newValue;
                this._eventBus.emit(Component.EVENT_FLOW_CDU, oldValue, target);
                return true;

            },
        });
    }*/
    private makePropsProxy(props: any) {

        return new Proxy(props, {

            get(target, prop: string | symbol) {
                const value: {} = target[prop];
                return typeof value === 'function' ? value.bind(target) : value;
            },

            set: (target, prop: string | symbol, value) => {

                if (target[prop] !== value)
                {
                    target[prop as keyof TypeProps] = value;
                    this.setUpdate = true;
                }

                return true;
            },
        });
    }

    protected show() {
        this.getContent()!.style.display = 'block';
    }

    protected hide() {
        this.getContent()!.style.display = 'none';
    }

    /* public destroy() {
         this.element?.remove();
         this.onDestroy();
     }

     public onDestroy() {
     }*/
}


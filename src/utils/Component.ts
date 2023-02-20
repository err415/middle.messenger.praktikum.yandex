import { EventBus } from "./EventBus";

// Нельзя создавать экземпляр данного класса
class Component {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    } as const;

    protected props: Record<string, unknown>
    private eventBus: () => EventBus;
    private element: HTMLElement | null = null;
    private meta: { tagName: string; props: any};

    /** JSDoc
     * @param {string} tagName
     * @param {Object} props
     *
     * @returns {void}
     */
    constructor(tagName = "div", props = {}) {
        const eventBus = new EventBus();

        this.meta = {
            tagName,
            props
        };

        this.props = this._makePropsProxy(props);

        this.eventBus = () => eventBus;

        this.registerEvents(eventBus);
        eventBus.emit(Component.EVENTS.INIT);
    }
    private addEvents() {
        const { events = {}} = this.props as { events: Record<string, () => void>}

        Object.keys(events).forEach(eventName => {
            this.element!.addEventListener(eventName, events[eventName]);
        });
    }
    private removeEvents() {
        const {events = {}} = this.props as  { events: Record<string, () => {}> };

        Object.keys(events).forEach((eventName) => {
            this.element?.removeEventListener(eventName, events[eventName]);
        });
    }
    private registerEvents(eventBus: EventBus) {
        eventBus.attach(Component.EVENTS.INIT, this.init.bind(this));
        eventBus.attach(Component.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.attach(Component.EVENTS.FLOW_CDM, this._componentDidUpdate.bind(this) as any);
        eventBus.attach(Component.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    private createResources() {
        const { tagName } = this.meta;
        this.element = this._createDocumentElement(tagName);
    }

    protected init() {
        this.createResources();
        this.eventBus().emit(Component.EVENTS.FLOW_RENDER);
    }

    private _componentDidMount() {
        this.componentDidMount();
    }

    protected componentDidMount() {}

    public dispatchComponentDidMount() {
        this.eventBus().emit(Component.EVENTS.FLOW_CDM);
    }

    private _componentDidUpdate(prevProps: {}, newProps: {}): void {
        if (!this.componentDidUpdate(prevProps, newProps)) {
            this.eventBus().emit(Component.EVENTS.FLOW_RENDER);
        }
    }

    protected componentDidUpdate(prevProps: {}, newProps: {}): undefined | boolean | {} {
        if (prevProps !== newProps){
            return true;
        }
    }

    public setProps = (nextProps: {}) => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    };
    private _render() {
        const block = this.render();
        this.removeEvents();
        this.element!.innerHTML = '';
        // Это небезопасный метод для упрощения логики
        // Используйте шаблонизатор из npm или напишите свой безопасный
        // Нужно компилировать не в строку (или делать это правильно),
        // либо сразу превращать в DOM-элементы и возвращать из compile DOM-ноду
        this.element!.innerHTML = block;
        this.addEvents();

    }

    // Переопределяется пользователем. Необходимо вернуть разметку
    protected render() {
        return '';
    }

    getContent() {
        return this.element;
    }

    private _makePropsProxy(props: any) {
        // Ещё один способ передачи this, но он больше не применяется с приходом ES6+
        const self = this;

        return new Proxy(props, {
            get(target, prop:string | symbol) {

                const value = target[prop];

                return typeof value === "function" ? value.bind(target): value;
            },
            set(target, prop: string | symbol, value): boolean {
                const prevProps = { ...target};

                target[prop] = value;

                self.eventBus().emit(Component.EVENTS.FLOW_CDU, prevProps, target);
                return true;
            },
            deleteProperty(target: any, p: string | symbol): boolean {
                throw new Error('Нет доступа');
            },

        });
    }
    private _createDocumentElement(tagName: string) {
        // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
        return document.createElement(tagName);
    }

    protected show() {
        this.getContent()!.style.display = "block";
    }

    protected hide() {
        this.getContent()!.style.display = "none";
    }
}

export default Component;

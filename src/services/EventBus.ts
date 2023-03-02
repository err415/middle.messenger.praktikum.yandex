
export class EventBus<E extends { [Ev: string]: unknown[] }>  {
    private readonly events: {
        [K in keyof E]?: Array<(...args: E[K]) => void>;
    } = {};

    constructor() {
        this.events = {};
    }

    attach<K extends keyof E>(event: K, callback: (...args: E[K]) => void) {
        if (!this.events[event])
            this.events[event] = [];

        this.events[event]!.push(callback);
    }

    emit<K extends keyof E>(event: K, ...args: E[K]) {
        if (!this.events[event])
            return;

        this.events[event]!.forEach(
            listener => { listener( ...args ) }
        );

    }

    detach<K extends keyof E>(event: K, callback: (...args: E[K]) => void) {
        if (!this.events[event])
            return;

        this.events[event] = this.events[event]!.filter(
            item => item !== callback
        );
    }
    _checkEvent(event:string) {
        if (!this.events[event]){
            throw new Error(`нет события': ${event}`);
        }
    }
}



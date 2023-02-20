
class EventBus  {
    readonly _events: Record<string, Function[]>;

    constructor() {
        this._events = {};
    }

    attach(event: string, callback: () => void):void {
        if (!this._events[event])
            this._events[event] = [];

        this._events[event].push(callback);
    }

    emit(event: string, ...args: unknown[]):void {
        if (!this._events[event])
            return;

        this._events[event].forEach(listener => { listener(...args) });

    }

    detach(event: string, callback: () => void):void {
        if (!this._events[event])
            return;

        this._events[event] = this._events[event].filter((item => item !== callback));
    }
    _checkEvent(event:string) {
        if (!this._events[event]){
            throw new Error(`нет события': ${event}`);
        }
    }
}
export default EventBus;


export class EventBus  {
    private readonly events: Record<string, Function[]> = {};

    constructor() {
        this.events = {};
    }

    attach(event: string, callback: () => void): void {
        if (!this.events[event])
            this.events[event] = [];

        this.events[event].push(callback);
    }

    emit(event: string, ...args: unknown[]):void {
        if (!this.events[event])
            return;

        this.events[event].forEach(listener => { listener( ...args ) });

    }

    detach(event: string, callback: () => void):void {
        if (!this.events[event])
            return;

        this.events[event] = this.events[event].filter((item => item !== callback));
    }
    _checkEvent(event:string) {
        if (!this.events[event]){
            throw new Error(`нет события': ${event}`);
        }
    }
}



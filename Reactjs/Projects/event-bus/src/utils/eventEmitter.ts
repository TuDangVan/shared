export declare const eventBus: {
    on: (type: any, handler: any) => void;
    off: (type: any, handler: any) => void;
    emit: <T = any>(type: any, evt: T) => void;
};

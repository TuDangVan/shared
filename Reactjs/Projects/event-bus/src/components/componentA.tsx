import * as React from "react";
import { eventBus } from "../Utils/eventEmitter";
import { EVENT } from "../utils/constants/event.constants";

export const ComponentA: React.FC<any> = () => {
    React.useEffect(() => {
        eventBus.on(EVENT.LOGIN, onLoginListener);

        return () => {
            eventBus.off(EVENT.LOGIN, onLoginListener);
        };
    }, []);

    const onLoginListener = (evt: any) => {
        console.log("onLoginListener evt === ", evt);
    }

    return (
        <>Listen Event component</>
    )
}
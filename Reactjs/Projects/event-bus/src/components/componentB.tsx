import * as React from "react";
import { eventBus } from "../utils/eventEmitter";
import { EVENT } from "../utils/constants/event.constants";
export const ComponentB = () => {

    eventBus.emit(EVENT.LOGIN, {
        firstName: "Brian",
        lastName: "kaylin",
        email: "brian@robotic.com"
    });
    
    return (
        <>Start emit event</>
    )
}
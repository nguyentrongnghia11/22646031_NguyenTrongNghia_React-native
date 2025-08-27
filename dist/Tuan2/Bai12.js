"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const simulateTask = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Success");
        }, time);
    });
};
const callSimulateTask = async () => {
    const result = await simulateTask(2000);
    console.log(result);
};
callSimulateTask();

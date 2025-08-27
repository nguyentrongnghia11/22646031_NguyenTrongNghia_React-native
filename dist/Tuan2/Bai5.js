"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const returnPromise = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve("Taskdone");
        }, time);
    });
};
let time = 4000;
returnPromise(time).then((task) => {
    console.log("Information task", task);
}).catch((error) => {
    console.log("Return error after 1s ", error);
});

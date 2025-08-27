"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const returnPromise = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve("Taskdone");
        }, time);
    });
};
let timeTaskA = 4000;
let timeTaskb = 2000;
const result = Promise.race([returnPromise(timeTaskA), returnPromise(timeTaskb)]).then((result) => {
    console.log("Information task A: ", result);
});

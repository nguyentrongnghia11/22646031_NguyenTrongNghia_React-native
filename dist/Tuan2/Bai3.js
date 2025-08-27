"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const returnPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Something went wrong");
        }, 1000);
    });
};
returnPromise().then((num) => {
    console.log("Return error after 1s ", num);
}).catch((error) => {
    console.log("Return error after 1s ", error);
});

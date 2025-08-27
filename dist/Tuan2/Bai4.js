"use strict";
// Use .then() and .catch() to handle a Promise that returns a random number.
Object.defineProperty(exports, "__esModule", { value: true });
const returnPromise = () => {
    return new Promise((resolve, reject) => {
        return resolve(Math.random());
    });
};
returnPromise().then((num) => {
    console.log("handle num value random ", num);
}).catch((error) => {
    console.log("Return error after 1s ", error);
});

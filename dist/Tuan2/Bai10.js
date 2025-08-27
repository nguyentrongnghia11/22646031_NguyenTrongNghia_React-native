"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const returnPromise = (num) => {
    return new Promise((resolve, reject) => {
        num > 10 ? resolve(num) : reject("Failed");
    });
};
const result = returnPromise(20)
    .then((result1) => console.log("Success"))
    .catch((err) => console.log(err))
    .finally(() => console.log("Done"));

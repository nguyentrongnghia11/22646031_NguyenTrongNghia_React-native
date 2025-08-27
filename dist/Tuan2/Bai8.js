"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const returnPromise = () => {
    return new Promise((resolve, reject) => {
        let a = 2;
        resolve(a);
    });
};
const result = returnPromise().then((result1) => result1 * 2).then((result2) => {
    result2 = result2 + 5;
    console.log(result2);
});

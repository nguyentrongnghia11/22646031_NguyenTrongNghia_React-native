"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function multiplyAfter1s(num) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return num * 3;
}
multiplyAfter1s(5).then(result => {
    console.log(result);
});

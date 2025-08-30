"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function multiplyAfter1s(num) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return num * 3;
}
async function runParallel() {
    console.log("Bắt đầu...");
    const results = await Promise.all([
        multiplyAfter1s(2),
        multiplyAfter1s(4),
        multiplyAfter1s(6)
    ]);
    console.log("Kết quả:", results);
    console.log("Hoàn tất!");
}
runParallel();

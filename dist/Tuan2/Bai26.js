"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function waitFiveSeconds() {
    console.log("Bắt đầu chờ...");
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log("Đã chờ 5 giây xong!");
}
waitFiveSeconds();

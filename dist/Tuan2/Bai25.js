"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function downloadFile(filename) {
    console.log(`Bắt đầu tải: ${filename} ...`);
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log(`Tải xong: ${filename}`);
}
downloadFile("example.zip");

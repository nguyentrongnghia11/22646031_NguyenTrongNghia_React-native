"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function fakeTask(id) {
    const delay = Math.floor(Math.random() * 2000) + 1000; // 1-3 giây
    await new Promise(resolve => setTimeout(resolve, delay));
    console.log(`Task ${id} done`);
    return id;
}
async function batchProcess() {
    const tasks = [
        fakeTask(1),
        fakeTask(2),
        fakeTask(3),
        fakeTask(4),
        fakeTask(5)
    ];
    const results = await Promise.all(tasks);
    console.log("Tất cả task xong:", results);
}
batchProcess();

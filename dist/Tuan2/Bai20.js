"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchUser(id) {
    const apiCall = new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: `User ${id}` });
        }, 1000);
    });
    const timeout = new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Timeout!")), 2000);
    });
    return Promise.race([apiCall, timeout]);
}
fetchUser(1)
    .then(user => console.log("User:", user))
    .catch(err => console.log("Lỗi:", err.message));

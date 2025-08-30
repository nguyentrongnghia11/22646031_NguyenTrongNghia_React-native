"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchUser(id) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
        id,
        name: `User ${id}`,
        email: `user${id}@example.com`
    };
}
fetchUser(1).then(user => {
    console.log("User nhận được:", user);
});

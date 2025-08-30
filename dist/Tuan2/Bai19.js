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
async function fetchUsers(ids) {
    const users = await Promise.all(ids.map(id => fetchUser(id)));
    return users;
}
fetchUsers([1, 2, 3]).then(users => {
    console.log("Danh sách user:", users);
});

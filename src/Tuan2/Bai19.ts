async function fetchUser(id: number) {
  await new Promise(resolve => setTimeout(resolve, 1000)); 
  return { 
    id, 
    name: `User ${id}`, 
    email: `user${id}@example.com` 
  };
}

async function fetchUsers(ids: number[]) {
  const users = await Promise.all(
    ids.map(id => fetchUser(id))
  );
  return users;
}

fetchUsers([1, 2, 3]).then(users => {
  console.log("Danh sách user:", users);
});

async function fetchUser(id:number) {
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

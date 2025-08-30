async function fetchTodo(id:number) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

async function fetchMultipleTodos() {
  const ids = [1, 2, 9999];

  const results = await Promise.allSettled(
    ids.map(id => fetchTodo(id))
  );

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`✅ Todo ${ids[index]} thành công:`, result.value);
    } else {
      console.log(`❌ Todo ${ids[index]} thất bại:`, result.reason.message);
    }
  });
}

fetchMultipleTodos();

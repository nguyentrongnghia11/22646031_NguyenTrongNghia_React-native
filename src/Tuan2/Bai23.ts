
async function getCompletedTodos() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const todos:any[] = await response.json();

    const completed = todos.filter(todo => todo.completed);

    return completed;
  } catch (err) {
    console.error("Lỗi:", err);
    return [];
  }
}

getCompletedTodos().then(completed => {
  console.log("Todos đã hoàn thành:", completed.slice(0, 5)); 
});

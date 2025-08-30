async function getTodo(id: number) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
}

async function getTodos(ids: number[]) {
    try {
        const todos = await Promise.all(ids.map(id => getTodo(id)));
        todos.forEach(todo => {
            console.log("Todo:", todo);
        });
    } catch (err) {
        console.error("Lỗi:", err);
    }
}

getTodos([1, 2, 3, 4]);

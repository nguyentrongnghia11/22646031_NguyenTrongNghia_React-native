async function postData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "Hello",
        body: "This is a test post",
        userId: 1
      })
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("Kết quả POST:", data);
  } catch (err) {
    console.error("Lỗi:", err);
  }
}

postData();

async function fetchWithRetry(url:string, retries :number) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data; 
    } catch (err) {
      console.warn(`Thử lần ${attempt} thất bại: ${err}`);

      if (attempt === retries) {
        throw new Error(`Failed after ${retries} retries`);
      }
    }
  }
}

// Thử gọi
fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1", 3)
  .then(data => console.log("Dữ liệu nhận được:", data))
  .catch(err => console.error("Lỗi:", err.message));

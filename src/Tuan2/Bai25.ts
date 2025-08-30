async function downloadFile(filename:string) {
  console.log(`Bắt đầu tải: ${filename} ...`);

  await new Promise(resolve => setTimeout(resolve, 3000));

  console.log(`Tải xong: ${filename}`);
}

downloadFile("example.zip");

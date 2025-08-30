async function doubleAfter1s(num:number) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return num * 2;
}

async function run() {
  const promises = [
    doubleAfter1s(1),
    doubleAfter1s(2),
    doubleAfter1s(3)
  ];

  for await (const result of promises) {
    console.log("Kết quả:", result);
  }
}

run();

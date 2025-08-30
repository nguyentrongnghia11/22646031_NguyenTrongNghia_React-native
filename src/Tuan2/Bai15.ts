async function multiplyAfter1s(num: number) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return num * 3;
}

async function runSequential() {
  console.log("Bắt đầu...");

  const r1 = await multiplyAfter1s(2); 
  console.log("Kết quả 1:", r1); 

  const r2 = await multiplyAfter1s(4);
  console.log("Kết quả 2:", r2);

  const r3 = await multiplyAfter1s(6);
  console.log("Kết quả 3:", r3);

  console.log("Hoàn tất!");
}

runSequential();

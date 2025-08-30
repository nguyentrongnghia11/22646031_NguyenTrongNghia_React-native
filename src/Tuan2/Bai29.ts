async function fakeTask(id:number) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log(`Task ${id} done`);
}

async function queueProcess() {
  await fakeTask(1);
  await fakeTask(2);
  await fakeTask(3);
}

queueProcess();

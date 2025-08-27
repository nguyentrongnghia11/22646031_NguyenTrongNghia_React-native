

const simulateTask = (time: number): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Success")
        }, time);
    })
}

const callSimulateTask = async () => {
    const result = await simulateTask(2000)
    console.log (result)
}

callSimulateTask()
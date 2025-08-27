const returnPromise = () => {
    return new Promise((resolve, reject) => {
        return resolve(Math.random())
    })
}


const returnPromise2 = (num: number): Promise<number> => {
    return new Promise((resolve, reject) => {
        num > 10 ? resolve(num) : reject("Failed")
    })
}

const convertAsync = async () => {

    const result = await returnPromise();
    console.log("Result: ", result)
}

const convertAsync2 = async () => {

    const result = await returnPromise2(222);
    console.log("Result: ", result)
}

convertAsync()
convertAsync2()
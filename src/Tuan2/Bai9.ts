
const returnPromise = (arr: number[]): Promise<never> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            arr.forEach(element => {
                console.log("Read element after 1s in array ", element)
            });

            arr.filter((t) => t > 2).forEach((t) => console.log("Filter number than 2 ", t))
        }, 1000);

    })
}

const arr: number[] = [1, 2, 3, 4, 5]

const result = returnPromise(arr).then().catch()

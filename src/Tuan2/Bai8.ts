
const returnPromise = (): Promise<number> => {
    return new Promise((resolve, reject) => {
        let a: number = 2
        resolve(a)
    })
}

const result = returnPromise().then((result1) => result1 * 2).then((result2) => {
    result2 = result2 + 5
    console.log (result2)

}
)

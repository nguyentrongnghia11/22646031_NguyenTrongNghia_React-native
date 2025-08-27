const returnPromise = (num: number): Promise<number> => {
    return new Promise((resolve, reject) => {
        num > 10 ? resolve(num) : reject("Failed")
    })
}

const result = returnPromise(20)
  .then((result1) => console.log("Success"))
  .catch((err) => console.log(err))
  .finally(() => console.log("Done"));

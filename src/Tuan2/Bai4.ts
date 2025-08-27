// Use .then() and .catch() to handle a Promise that returns a random number.

const returnPromise = () => {
    return new Promise((resolve, reject) => {
        return resolve (Math.random())
    })
}


returnPromise().then((num) => {
    console.log("handle num value random " , num)
}).catch ((error) => {
    console.log ( "Return error after 1s " ,error )
})
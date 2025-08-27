const returnPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Something went wrong")
        }, 1000);
    })
}


returnPromise().then((num) => {
    console.log("Hello nghia " , num)
}).catch ((error) => {
    console.log ( "Return error after 1s " ,error )
})
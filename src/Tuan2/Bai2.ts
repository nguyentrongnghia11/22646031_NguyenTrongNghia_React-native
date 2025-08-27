const returnPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10)
        }, 1000);
    })
}


returnPromise().then((num) => {
    console.log("Return value after 1s " , num)
})
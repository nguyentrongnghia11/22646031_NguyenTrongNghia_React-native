
const hellword = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve ("Hello word")
        
    }, 2000)
})


hellword.then ((data) => console.log (data))
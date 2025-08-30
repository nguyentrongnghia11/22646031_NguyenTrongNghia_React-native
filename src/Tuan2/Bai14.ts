
async function multiplyAfter1s(num: number) {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return num * 3;
}

multiplyAfter1s(5).then(result => {
    console.log(result);
});

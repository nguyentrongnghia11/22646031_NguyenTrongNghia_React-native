const returnPromise = (num: number): Promise<number> => {
    return new Promise((resolve, reject) => {
        num > 10 ? resolve(num) : reject("Failed")
    })
}



async function catchError() {
    try {
        // giả sử gọi 1 API sai đường dẫn
        const res = await returnPromise(2);

        ;
        console.log("Dữ liệu:", res);

    } catch (err) {
        console.log("Có lỗi xảy ra:", err);
    }
}

catchError();

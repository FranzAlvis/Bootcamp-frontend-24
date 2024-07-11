const arr1 = [12, 6, 10, 2, 45, 100];
const numSmall = (arr) => {
    let min = arr[0];
    arr.forEach(x => {
        if (x <= min) {
            min = x
        }
    })
    return min;
}

console.log(`El numero mas pequeño es: ${numSmall(arr1)}`)


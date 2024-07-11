let arr2 = [7, 9, 1, 'a', 'a', 'f', 9, 4, 2, 'd', 'd'];

const remove = (arr) => {
    return arr.filter((item, index) => {
        console.log(arr.indexOf(item))
        return arr.indexOf(item) === index
    });
};

console.log(remove(arr2));
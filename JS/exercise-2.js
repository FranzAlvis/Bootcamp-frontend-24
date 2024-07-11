const numSmall = (arr) => {
    let min = arr[0];
    let pos = 0;
    arr.forEach((x, i) => {
      if (x <= min) {
        min = x;
        pos = i;
      }
    })
    return pos;
  }
  
  let arr1 = [3, 'c', 'c', 'a', 2, 3, 'c', 3, 'c', 2, 4, 9, 9]
  const result = (arr) => {
    let counter = 0;
    let arr2 = []
    arr.forEach(x => {
      aux = 0;
      counter = 0;
      for (let i = 0; i < arr.length; i++) {
        if (x == arr[i]) {
          counter++;
        }
      }
      arr2.push(counter);
    })
    const res = numSmall(arr2)
    return arr[res]
  }
  
  console.log(`The least repeated element is: ${result(arr1)}`)
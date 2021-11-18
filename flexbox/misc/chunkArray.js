const chunkArray = (arr, len) => {
    const chunkedArr = [];

    arr.forEach(val => {
        const last = chunkedArr[chunkedArr.length-1]
        if(!last || last.length === len){
            chunkedArr.push([val])
        }
        else{
            last.push(val)
        }
    });
    return chunkedArr;
}


function chunkArray(arr, len) {
  
    const chunkedArr = [];
    let i = 0;
  
    while (i < arr.length) {
      chunkedArr.push(arr.slice(i, i + len));
      i += len;
    }
  
    return chunkedArr;
}


arr = [1, 2 , 3, 4, 5, 6, 7, 8, 9]
len = 2
console.log(chunkArray(arr, 2))


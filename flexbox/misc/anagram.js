function isAnagram(str1, str2){
    return formatStr(str1) === formatStr(str2);
}


function formatStr(someWord) {
    return someWord
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
}


function isAnagramX (str1,str2){
    const arr1 = str1.split('').sort()
    const arr2 = str2.split('').sort()
    return arr1.every((value,index) => value === arr2[index])
}


const isAnagramXX = (str1,str2) => str1.split('').sort().every((value,index) => value ===  str2.split('').sort()[index])





console.log(isAnagram('baBasola', 'lsaoaabb'))
console.log(isAnagramX('babasola', 'lsaoaabb'))
console.log(isAnagramXX('babasola', 'lsaoaabb'))
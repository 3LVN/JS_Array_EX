let arr1 = [1, 2, 3, 4, 5, 8, 9]
let arr2 = [4, 5, 6, 7, 10 ]

const arr3 = arr1.filter(element => arr2.includes(element));
console.log(arr3)
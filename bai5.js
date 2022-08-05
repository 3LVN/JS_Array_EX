const arr1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
const arr2 = [3, 5, 9, 10, 88];
const arr3 = new Set();
arr3.add(arr2.filter(element => arr1.includes(element)))

console.log(arr3)
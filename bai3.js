let arr = [1, 7, 9, 2, 6, 3, 8, 4]
let val = 10;
let arr2 =  arr.reduce(function(total, current, i){
    if(arr.includes(val- current, i ++)){
        total.push([current, val - current])
    }
    return total;
}, [])
console.log(arr2)

   

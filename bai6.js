let arr = ['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo'];
let obj = {};
arr.forEach(function(val){
    if(obj.hasOwnProperty(val)) obj[val] ++;
    else{obj[val] = 1}
})
console.log(obj)
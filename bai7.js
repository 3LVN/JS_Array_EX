let arr = [{ make: 'audi', model: 'r8', year: '2012' }, { make: 'audi', model: 'rs5', year: '2013' }, { make: 'ford', model: 'mustang', year: '2012' }, { make: 'ford', model: 'fusion', year: '2015' }, { make: 'kia', model: 'optima', year: '2012' }];
let obj = {};

arr.forEach(function(innerObj, index, arr){
    if(obj.hasOwnProperty(innerObj.make)) obj[innerObj.make].push(innerObj);
    else obj[innerObj.make] = [innerObj];
})
console.log(obj)
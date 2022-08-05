Array.prototype.myMap = function(callbackFunc){
    let arr = []
    for(i = 0; i < this.length; i++){
        arr.push(callbackFunc(this[i], index, this))
    }
    return arr;
}

Array.prototype.myFilter = function(callbackFunc){
    let arr = []
    for(i = 0; i < this.length; i++){
        if(callbackFunc(this[i], index, this)){
            arr.push(this[i])
        }
    }
    return arr;
}

Array.prototype.myReduce = function(callbackFunc, temp){
    if(temp) let i = 1;
    else {
        let i = 0 ; 
        temp = this[0]}
    
    for(; i < this.length; i++){
      temp =   callbackFunc(this[i-1], this[i], i, this)
    }
    return temp;
}
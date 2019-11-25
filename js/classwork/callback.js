var arr = [1,2,3,4,5];

var result= arr.forEach(function(value,index){
    console.log(index, value);
    return value + 1;
})

console.log("for each", result, arr)
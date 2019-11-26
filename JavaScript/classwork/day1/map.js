var array = [1,2,3,4,5]

var result = array.forEach(function(val,index){
    console.log(index,val);
    return val+ 1;
});

console.log("for Each",result,array);

var result= array.map(function(val,index){
    console.log(index,val);
    return val * val;
});

console.log("Map",result,array);


var result = array.filter(function(val, index){
    return val%2 === 0;
});

console.log("even>>>",result);


// counter increment  auto in 1 sec

// var counter = 0;
// setInterval(function(){
//     counter++;
//     console.log(counter);
    
// }, 1000);

for (var i = 0; i<10;i++){
    setTimeout(function(){
        console.log(i);
    },1000)
}
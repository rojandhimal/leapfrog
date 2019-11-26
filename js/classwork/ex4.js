var numbers = [1, 2, 3, 4];

function transform(collection, tranFunc) {
   return collection.map(function(val){
       return tranFunc(val)
   })
 }

var output = transform(numbers, function(num) {
    return num * 2;
});

console.log(output);
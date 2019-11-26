var fruits = [
    {id: 1, name: 'Banana', color: 'Yellow'},
    {id: 2, name: 'Apple', color: 'Red'}
]


function searchByName(fruits, sName){
    fruits.forEach(function(value){
        if(value.name.toLowerCase()==sName.toLowerCase()){
            console.log("search by name");
            console.log("id "+value.id+" name :"+value.name+" color: "+value.color);
        }
        
    });
}

search="banana";
searchByName(fruits, search);


function searchByKeyValue(fruits, k,v){

    fruits.forEach(function(val){
        if(val[k.toLowerCase()].toLowerCase()==v.toLowerCase()){
            console.log("search By Key Value")
            console.log("id "+val.id+" name :"+val.name+" color: "+val.color);  
        }
    })
}

searchByKeyValue(fruits,'Name','banana');
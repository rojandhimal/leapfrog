var input = {
    '1': {
      id: 1,
      name: 'John',
      children: [
        { id: 2, name: 'Sally' },
        { id: 3, name: 'Mark', children: [{ id: 4, name: 'Harry' }] }
      ]
    },
    '5': {
      id: 5,
      name: 'Mike',
      children: [{ id: 6, name: 'Peter' }]
    }
  };
var tempObj = new Object();
var output = new Object();

function objCopy(srcObj) {
    var targetObj = new Object();
    for(key in srcObj){
        targetObj[key] = srcObj[key];
    }
    return targetObj;
}

function normalize(obj){  
    for(key in obj){
      
       var element = obj[key];
        if(element.hasOwnProperty("children")){
            tempObj.id = element["id"];
            tempObj.name = element["name"];
            tempObj.children = [];
            for(childElement in element["children"]){
              tempObj.children.push(element["children"][childElement]["id"]);
            }
            Object.defineProperty(output, element["id"], {value: objCopy(tempObj), configurable: true});
            delete tempObj["children"];
            normalize(element["children"]);
        }
        else{
            tempObj.id = element["id"];
            tempObj.name = element["name"];
            Object.defineProperty(output, element["id"], {value: objCopy(tempObj), configurable: true});
        }
    }
    return output;
}
console.log("OUTPUT = \n",normalize(input));
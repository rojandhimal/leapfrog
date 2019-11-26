var arr = [{
    id: 1,
    name: 'John',
    }, {
    id: 2,
    name: 'Mary',
}, {
    id: 3,
    name: 'Andrew',
}];
function sortBy(array, key) {
    return array.sort(function(a, b)
    {
    if(a[key] < b[key])
        return -1;
    if(a[key] > b[key])
        return 1;
    else
        return 0;
    });
}
var sorted = sortBy(arr, 'name');var arr = [{
    id: 1,
    name: 'John',
    }, {
    id: 2,
    name: 'Mary',
}, {
    id: 3,
    name: 'Andrew',
}];
function sortBy(array, key) {
    return array.sort(function(a, b)
    {
    if(a[key] < b[key])
        return -1;
    if(a[key] > b[key])
        return 1;
    else
        return 0;
    });
}
var sorted = sortBy(arr, 'name');

console.log(sorted)
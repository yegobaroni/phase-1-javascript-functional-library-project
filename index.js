function myEach(collection, callback) {
    let arr = Object.values(collection);
    for (let element of arr) {
        callback(element);
    }
    return collection;
}
function myMap(collection, callback) {
    let arr = Object.values(collection);
    let newArr = [];
    for (let element of arr) {
        newArr.push(callback(element));
    }
    return newArr;
}


function myReduce(collection, callback, acc = 0) {
    let arr = Object.values(collection);
    let sum = acc;
    for (let element of arr) {
        sum = callback(sum, element, collection);
    }
    return sum;
}
//console.log(myReduce(20, 8, 28))

function myFind(collection, predicate) {
    let arr = Object.values(collection);
    for (let element of arr) {
        if (predicate(element)) {
            return element;
        }
    }
}
function myFilter(collection, predicate) {
    let arr = Object.values(collection);
    let newArr = [];
    for (let element of arr) {
        if (predicate(element)) {
            newArr.push(element);
        }
    }
    return newArr;
}
function mySize(collection) {
    return Object.values(collection).length;
}
//Array
function myFirst(arr, n = 0) {
    let newArr = [];
    if (n == 0 ){
        return arr[n];
    }
    for (let i = 0; i < n; i++) {

        newArr.push(arr[i]);
    }
    return newArr;
}
function myLast(arr, n=0) {
    let newArr = [];
    if (n == 0 ){
        return arr[arr.length-1];
    }
    for (let i = n; i > 0; i--) {
        newArr.push(arr[arr.length-i]);
    }
    return newArr;
}
// function mySortBy(array, callback) {

// }
// function myFlatten(array, [shallow], newArr = []) {
   
// }
// Object 
function myKeys(object) {
    let newArr = [];
    for (let key of Object.keys(object)){
        newArr.push(key);
    }
    return newArr;
}
function myValues(object) {
    let newArr = [];
    for (let key of Object.values(object)){
        newArr.push(key);
    }
    return newArr;
}
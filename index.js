function myEach(collection, callback) {
    for (let key in collection) {
        callback(collection[key]);
    }
    return collection
}
//myEach([1, 2, 3], x => console.log(x));
// myEach({one: 1, two: 2,three:  3}, x => console.log(x));
function myMap(collection, callback) {
    let newArray=[];
         for (let key in collection) {
            newArray.push(callback(collection[key]))
        }
    return newArray
}
//
function myReduce(collection,callback, acc){
    for (let key in collection) { 
      if (acc === undefined) {
        acc = collection[key]
      } else {
        acc=callback(acc, collection[key], collection)  }
      }
      return  acc
  }
//console.log(myReduce([1, 2, 3], function(acc, val, collection) { return acc + val; }, 10))
//console.log(myReduce({one: 1, two: 2, three: 3}, function(acc, val, collection) { return acc + val; }))
function myFind(collection, predicate) {
    for (let key in collection) {
  if  (predicate(collection[key])) 
      return collection[key]
    }
}
//console.log(myFind([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));
//console.log(myFind({one: 1, three: 3, four: 4, six: 6}, function(num){ return num % 2 == 0; }))
function myFilter(collection, predicate) {
    let newArray = [];
    for (let key in collection) {
        if (predicate(collection[key])) {
            newArray.push(collection[key])
        }
    } 
  return newArray
}
// console.log(myFilter([2, 2, -2, 4], function(num){ return num % 2 == 0; }))
// console.log(myFilter({one: 1, three: 3, five: 5}, function(num){ return num % 2 == 0; }))
function mySize(collection) {
    let i = 0
    for (let key in collection) {
      i++
    }
  return i
}
//console.log(mySize({one: 1, two: 2, three: 3, four: 4, five: 5}))
//console.log(mySize([]))
function myFirst(array, n) {
    for (const element of  array) {
      if (n){
         return array.slice(0,n) }         
      else{          
        return array[0]}         
 }
}
//console.log(myFirst([5, 4, 3, 2, 1]))
//console.log(myFirst([5, 4, 3, 2, 1], 3))
function myLast(array, n) {
    for (const element of array) {
        if (n) {
            return array.slice(-n)
        } else {
  //console.log(array.slice(-1))
            return array.slice(-1)[0]
        }
    }
}
//console.log(myLast([5, 4, 3, 2, 1]))
//console.log(myLast([5, 4, 3, 2, 1], 3))
function myKeys(object) {
    let array = [];
    for (let key in object) {  
    array.push(key)}
        return array
      }
  //console.log(myKeys({one: 1, two: 2, three: 3, four: 4}))
  function myValues(object) {
    let array = [];
    for (let key in object) {
        array.push(object[key])
    }
    return array
  }
  //console.log(myValues({one: 1, two: 2, three: 3}))

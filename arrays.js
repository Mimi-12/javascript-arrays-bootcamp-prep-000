var chocolateBars = ["snickers" ,"hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  ["array", ...element]
  console.log(array);
  return array;
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  console.log(array);
  return array;
}
function addElementToEndOfArray(array, element){
 array.push(element)
  console.log(array);
  return array;
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  console.log(array);
  return array;
}
function  accessElementInArray(array, index){
  array = [array.index]
  console.log(array[0]);
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  console.log(array);
  return array;
}
function removeElementFromBeginningOfArray(array){
  array.shift
  console.log(array);
  return array;
}
function  destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  console.log(array);
  return array;
}
function removeElementFromEndOfArray(array){
  array.pop()
  console.log(array);
  return array;
}

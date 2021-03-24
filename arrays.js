var chocolateBars = ["snickers", "hundred grand", "kit kat", "skittles"]

function addElementToBeginningOfArray(element, array){
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}


function accessElementInArray (array, index) {
  console.log(array[index]);
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift(0)
  return array
}

function removeElementFromBeginningOfArray (array) {
  console.log(array.slice(-1))
}

function destructivelyRemoveElementFromEndOfArray (array) {
  return(array.pop())
}

function removeElementFromEndOfArray (array) {
  return(array.slice(0, array.length - 1))
}

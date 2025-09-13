// write a function that searches for an element
// in a aarray and return the index ,if the element is not present then just return -1

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function searchElement(target, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}

let res = searchElement(5, arr);
console.log(res);

// write a function that return  the number of negative numbers in an array

let arr2 = [-1, -2, 3, 4, -5, 6, -7, 8, 9, -10, -11];
let count = 0;
function countNegativeNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}
let res2 = countNegativeNumbers(arr2);

console.log(res2);


// fint the largest number in an array


let arr3 = [1,2,3,4,5,6,7,8,10];

function findLargestNumber(arr) {
   let largest = -1;
   for(let i = 0; i<arr.length; i++){
       if(arr[i]>largest){
           largest = arr[i]
       }
   }
   return largest
}

let res3 = findLargestNumber(arr3);
console.log(res3)

// fint the largest number in an array with all negative numbers
let arr4 = [-9,-3,-6];

function findLargestNumber(arr) {
   let largest = arr[0];// -Infinity;
   for(let i = 0; i<arr.length; i++){
       if(arr[i]>largest){
           largest = arr[i]
       }
   }
   return largest
}

let res4 = findLargestNumber(arr2);
console.log(res4)


// home work
// write a function that return sallest number in an array

let arr5 = [1,2,3,4,5,6,7,-9,-3,-6,-11];

function findSmallestNumber(arr) {
   let smallest = arr[0];// Infinity;
   for(let i = 0; i<arr.length; i++){
       if(arr[i]<smallest){
           smallest = arr[i]
       }
   }
   return smallest
}
let res5 = findSmallestNumber(arr5);
console.log(res5)

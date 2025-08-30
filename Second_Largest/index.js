let arr = [1, 2, 3, 4, 5];

function findSecondLargest() {
    // if array length is less than 2
    if(arr.length < 2) return "array length should be at least 2";
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    for(let i = 0;i<arr.length; i++){
        if(arr[i] > firstLargest){
            secondLargest = firstLargest;
            firstLargest = arr[i];
        }else if(arr[i] > secondLargest && arr[i] != firstLargest){
            secondLargest = arr[i];
        }
    }
}
let res = findSecondLargest(arr);
console.log(res);
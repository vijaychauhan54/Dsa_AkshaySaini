let arr = [0,0,1,1,2,2,3,3,4,5,6];
function removeDuplicates(arr) {
    let countDuplicates = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > arr[countDuplicates]) {
            countDuplicates = countDuplicates + 1;
            arr[countDuplicates] = arr[i];
        }
    }
    return countDuplicates + 1; // because index starts from 0
}
console.log(removeDuplicates(arr)); // [0,1,2,3,4,5,6]
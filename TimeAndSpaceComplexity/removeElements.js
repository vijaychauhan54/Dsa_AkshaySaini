let arr = [2,3,4,3,4,2];
function removeElements(arr, val) {
    let count = 0;
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i] !== val){
            arr[count] = arr[i];
            count = count + 1;
        }
    }
    return count; // new length of array
}
console.log(removeElements(arr, 3)); // [2,4,4,2]
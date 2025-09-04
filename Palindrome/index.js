

let num = 121;
let rev = 0;
let orginalNum = num;
function palindrome(n) {
    if(n < 0) { // negative number cant be palindrome
        return false;
    }
    while(n > 0) {
        let rem = n % 10; // to get last number
        rev = rev * 10 + rem; // to add last number in rev variable
        n = Math.floor(n / 10); // to remove decimal part and last number 

    }
    return rev === orginalNum;

}
let res = palindrome(num);

console.log("res", res);
let num = 5473;
let originalNum = num;
let rev = 0;
function reverseInteger(n) {
    n = Math.abs(n); // to handle negative number
    while(n > 0) {
        let rem = n % 10; // to get last number
        rev = rev * 10 + rem; // to add last number in rev variable
        n = Math.floor(n / 10); // to remove decimal part and last number
    }
   return originalNum < 0 ? -rev : rev; // if original number is negative then return negative of rev else return rev
}
let res = reverseInteger(num);
console.log("res", res);

// count digits

let n = -12;

function countDigits(n) {
  // edge case for if number is 0 and negative numbers
  if (n === 0) return 1;
n = Math.abs(n);
    let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
    
  }
  return count;
}
let result = countDigits(n);
console.log(result);

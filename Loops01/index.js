// for(let i = 0; i < 5; i++) {// first step is initialization, second step is condition, third step is increment/decrement
//     console.log("Iteration number: " + i);
// }


for(let j = 10; j > 0; j -= 2) { // counting down from 10 to 1, decrementing by 2 each time reverse loop)
    console.log("Iteration number: " + j);
}

// 10 > 0 : true
// 8 > 0 : true
// 6 > 0 : true
// 4 > 0 : true
// 2 > 0 : true
// 0 > 0 : false (loop ends here)

for(let i = 5; i<0; i++) { // this loop will never run because the condition is false at the start
    console.log("Iteration number: " + i);
}

for(let i = 10; i>0; i++){
    console.log("Infinite loop");
}

// this loop will run infinitely because the condition is always true (i is always greater than 0)

// 10 > 0 : true
// 11 > 0 : true    
//  and so on...


//  how to call a function multiple times using a loop
function sayHello() {
    console.log("Hello!");
}
for(let i = 0; i<10; i++) {
    sayHello();
}
// this will call the sayHello function 10 times


// how to print array elements using a loop

let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
for(let i = 0; i<fruits.length; i++) {
    console.log(fruits[i]);
}
// this will print each fruit in the array
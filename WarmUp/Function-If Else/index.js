function  getName() { // we need to add a function name here
    console.log("My name is Param Singh");
}

getName(); // we need to call the function here


function getDynamicName(name) { // parameter name added
    console.log("My name is " + name);
}

getDynamicName("Param Singh"); // we need to call the function here with a name as an argument



function addTwoNumbers(num1, num2) { // parameters num1 and num2 added
    return num1 + num2; // return statement added to return the sum
}   

let sum = addTwoNumbers(5, 10); // calling the function with arguments 5 and 10, and storing the result in sum
console.log(sum); // printing the sum to the console


function square(num) { // parameter num added
    return num * num; // return statement added to return the square
}
let squaredValue = square(4); // calling the function with argument 4, and storing the result in squaredValue
console.log(squaredValue); // printing the squared value to the console\


// Function to check if a person is eligible to vote based on age
function isElegableToVote(age) { // parameter age added
    if(age<0){
        return "Invalid age"; // return statement for invalid age
    }else if (age >= 18) { // condition to check if age is 18 or more
        return true; // return true if eligible
    } else {
        return false; // return false if not eligible
    }
}   

let age = 20; // example age
let elegable = isElegableToVote(age); // calling the function with age and storing the result in elegable
console.log(elegable); // printing the eligibility to the console


function checkEvenOdd(number) { // parameter number added
    if (number % 2 === 0) { // condition to check if number is even
        return "Even"; // return "Even" if the number is even       
    } else {
        return "Odd"; // return "Odd" if the number is odd
    }
}

let number = 7; // example number
let result = checkEvenOdd(number); // calling the function with number and storing the result in
console.log(result); // printing the result to the console
// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"

// Set two:
// const fruit3 = "cherry"
// con  st fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

const temp1 = 42
const temp2 = 350
const temp3 = 212

// Pseudo Coding 
// Create a function that takes any given number 
// within the function determines if the number is below boiling, at boiling point or above boiling point
// boiling point is 212 degrees Farenheit
//I should expect 42 is below boiling point, 350 is above boiling point & 212 is at boiling point
//within the function i would write and else if statement that determine is below boiling point is 42, else if above pointing is 350 and else if 212 is at boiling.
// when I tried every number it gave the correct response
// I received help with this question/challenge

const boilingPoint = (temp) => {
if(temp == 212){
    return "${temp} is below boiling Point"
} else if (temp>212){
    return "${temp} is above the boiling point"
}else if (temp< 212) {
    return "${temp} is below the boiling point"
}
}

console.log(boilingPoint(350))






// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10


// Pseudo Coding
// create a code that will combine two arrays using .concat()
// ensure the length is returned by adding .length to another variable when console
// logging.


const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

let twoArrays = myNumbers1.concat(myNumbers2)

console.log(twoArrays.length)





// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ovarB"

// Psuedo Coding
// Create a code that will reverse the letters of a string
// I decleared I will reverse my variable of bravoCohort declared as "Bravo 2022"
// In order to do that I will first split that will read each letter speratle.
// Then I will make them reverse in an array by removing the ""
// Then I will join them with the .join "" back to a string
// It returned reversed as expected.


const bravoCohort = "Bravo 2022"

let reverse = bravoCohort.split("").reverse().join("")

console.log(reverse)


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// const myArray = [13, 34, 5, 10, 27, 42]

// Psuedo Coding
// Create a statement aka loop
// The statment must evaluate which numbers in the array above classified as an even or odd value using the % 2
// Use i++ so it will read all numbers continously in the array
// The expected output should be in the order of "odd" "even" "odd" "even" "odd" "even"
// After my first try"
// I had to change my == to === to strictly equal my outcome
// I had to make sure I read myArray.length to get a number
// Following the past examples, help and trial I recived the correct outcome.

const myArray = [13, 34, 5, 10, 27, 42]

for (let i=0; i< myArray.length; i++){
    if (myArray[i] %2 === 0){
        console.log ("even") ;
    }else if (myArray[i] %2 === 1){
        console.log ("odd");
    }
}




// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Set one:
// const number1 = 58
// const number2 = 100

// Set two:
// const number3 = 27
// const number4 = 24

// Pseudo Coding
// Create a function that takes in a set of any two numbers listed below.
// In the function, you would subtract the smaller number from the larger number. 
// Each function would need to be addressed with if and else if statements to cover all possibilities and ensure the largest number is subtracting the smallest number.
// Expected outputs would be 42, 3

// I received some help with this question

// Functions:

const set1 = (num1, num2) => { 
    if(num1>num2) {
        return num1-num2
    }else if(num2>num1){
        return num2-num1
    }}


console.log(set1 (27,24))

const set2 = (num1, num2) => {
    if(num1>num2) {
        return num1-num2
    }else if(num2>num1){
        return num2-num1
    }
}

console.log(set2 (100, 58))
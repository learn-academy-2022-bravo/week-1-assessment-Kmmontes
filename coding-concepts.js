// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?ss
// const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))


// a) Your answer: 

// /5

// b) Verify and explain:

    // /I ran the code and it gave me back the valkue of 5 since we are pushing (adding) another 
    // value is reading the entire value line and bringbacck a value versus if we asked for an index, 
    // whcih we then would have gotten a 4 back.



// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: 

// /I believe it will return 10

// b) Verify and explain:

// /the reutrn was 10 because the function read the length of our variable including the
// space inside of the string "".


// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: 

    // It will return the "o" located in the string.

// b) Verify and explain:

    // When I ran in through the terminal, it did return the "o" as expected becuase I prompted the system to search for the fourth value placement and remember the placements are indexed beginning at 0. Information in Brackets means indexed readings.


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer:

        // / I believe it will return Ruby.

// b) Verify and explain:

        // When I ran the code it did return "Ruby" because it is reading the index of 1. Remember indexing starts reading values at 0 when in an array. In this case, Javascript is 0
        // and Ruby is 1 indexed.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())
console.log (weekendDays[0].toUpperCase(), weekendDays[1].toUpperCase())

// a) Your answer: After receiving help on this question, before I ran, it I realized my
// answer would be SATURDAY when adding a number to my index. In this case we tried both and compunded my answers to return both days capitalized.

// 
// b) Verify and explain:

// When I added a value to both indexes I was able to capitalize Saturday and Sunday. 

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: 

    // I believe this code might return "number".

// b) Verify and explain:

    // It did return number because we console logged type of a dataTypes length. Since we added a .length of data types the system is automtically searching for a number. If we would have removed . length and added "" we would have gotten back a return of string and if we would have replaced tht will true or flase by itself we would have gotten a Boolean.
    

//TODO: Part 1: Fizz Buzz
// To begin, solve the following classic “Fizz Buzz” problem. 
// There are a few different ways to do this - 
// experiment with what you think is the most efficient. 
// Once you have solved the problem, ask yourself if there could be another way; 
// and if so, would it be better.
// Accomplish the following:
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.
// Remember to commit your solution once it is working.

console.log('Part 1: Fizz Buzz');

for (let i = 1; i <= 100; i++) {
    let divisibleBy3 = i % 3 === 0;
    let divisibleBy5 = i % 5 === 0;

    if (divisibleBy3 && divisibleBy5) {
        console.log('Fizz Buzz');
    } else if (divisibleBy3) {
        console.log('Fizz');
    } else if (divisibleBy5) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

console.log("====================================");

// TODO: Part 2: Prime Time
// Now we will move onto something slightly more complex.
// Context: A prime number is any whole number greater than 1 that 
// cannot be exactly divided by any whole number other than itself and 1. 
// For example, the number 5 is prime because it cannot be divided by 4, 3, or 2; 
// it can only be divided by itself (5) and 1. Similarly, the numbers 7 and 11 are prime. 
// As numbers become larger, determining whether or not they are prime is increasingly difficult,
// but loops make this process relatively easy!

// Write a script that accomplishes the following:
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.
// Continuing with the example above, if n is equal to 4, your loop should log 5. Similarly,
// if n is 5, it should log 7, and 
// if n is 9, it should log 11. 
// Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.
// Be careful! If you set n to a number too large, your loop could take a long time to process.
console.log('Part 2: Prime Time');
let n = 4;//parseInt(prompt('Enter a number: ')); 
let nextN = n + 1;

while (true) {
    let isPrime = true;

    for (let j = 2; j < nextN; j++) {
        if (nextN % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`The next prime number after ${n} is ${nextN}`);
        break;
    }

    nextN++;
}

console.log("================convert To Fun====================");

function findNextPrime(n) {
    let nextN = n + 1;

    while (true) {
        let isPrime = true;

        for (let j = 2; j < nextN; j++) {
            if (nextN % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(`The next prime number after ${n} is ${nextN}`);
            break;
        }

        nextN++;
    }
}

findNextPrime(4);
findNextPrime(5);
findNextPrime(9);

console.log("====================================");
//TODO: Part 3: Feeling Loopy
// Your task is to write a script that accomplishes the following:
// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);

console.log('Part 3: Feeling Loopy');

let csvString = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

//without using split method
function parseCSV2(csvString) {
    let row = ''
    for (let i = 0; i < csvString.length || row.length>0; i++) {
        if (csvString[i] === '\n' || i === csvString.length) {//\' && csvString[i + 1] === '
            //start cells
            let cells = [];
            let cell =''
            for(let j=0;j<row.length;j++){
                if(row[j]===','){
                    cells.push(cell)
                    cell=''
                }else{
                    cell+= row[j];
                }
            }
            if(cell.length>0){
                cells.push(cell)
            }
            //end 
            console.log(cells)
            row ='';
        }else{
            row+=csvString[i];
        }
    }
}
console.log("================without split====================")
parseCSV2(csvString)

//With using split method
console.log("================using split====================")
function parseCSV(csvString) {
    let rows = csvString.split('\n');
    for (let j = 0; j < rows.length; j++) {
        let cells = rows[j].split(',');
        console.log(cells);
    }
}

parseCSV(csvString)
console.log("====================================");
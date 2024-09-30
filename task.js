/***  Practice Problem-01  ***/
/***
 * 1) Write an arrow function that will take 3 parameters, will multiply the parameter and will return the result.
 * */

const multiply = (x, y, z) =>{
    const result = x * y * z;
    return result;
}
const multi = multiply(4, 5, 6);
console.log(multi);

/***
 * 2) Write the following sentence in three lines and print the result: I am a web developer. I love to code. I love to eat biryani.
 * */ 

const threeLines = `I am a web developer.
 I love to code.
 I love to eat biryani. `;
 console.log(threeLines);

/**
 * 3) Write an arrow function that will take 2 parameter: One parameter will come from you and the other parameter will be a default parameter. Add these two parameter and return the result.
 * */

const numbers = (a, b=2) => a + b;
console.log(numbers(99));


/***  Practice Problem -02    ****/ 
/** Write an arrow function where it will do the following:
 * a) It will take an array where the array elements will be the name of your friends.
 * b) Check if the length of each element is even, push elements with even length to new array and return the result **/ 

const friends = ['Rakib', 'Shakib', 'habib', 'Olive', 'jack', 'ove', 'lili', 'lolita'];

// using filter
const even = friends.filter(friend => friend.length % 2 === 0);
console.log(even);

/***  Practice Problem - 03  ***/
/** Write an arrow function where it will do the following: x^2
a) Square each array element.
b)Calculate the sum of the squared elements
C) Return the average of the sum of the squared elements.
 
 */
// normal function :
const number = [5, 6, 7, 8];
let total = [];
let sum = 0;
function squared(){
    for(num of number){
        let square = num * num;
        
        sum = sum + square; 
    }
     let average = sum / number.length;
     total.push(average);
     return total;
}
// console.log(squared(total));

// Reduce Method:
const number2 = [5, 6, 7, 8];
const square = number2.reduce((sum, squared) => sum + (squared * squared) / number2.length, 0);
console.log(square);

/** Practice Problem - 04   **/ 
/**
 *a) It will take two array input.
b)Combine the two array and assign them in a new array.
c)Find the maximum number from the new array and return the result.
 * **/
// normal function:
const firstArray = [10, 20, 34, 44];
const secondArray = [33, 67, 89, 95];
function maxNumber(first, second){
    const totalArray = first.concat(second);
    let max = 0;
    for(num of totalArray){
        if(num > max){
            max = num;
        }
    }
    return max;
}
console.log(maxNumber(firstArray, secondArray));

// using spread and math max:
const totalArray = firstArray.concat(secondArray);
const maximumNumber = Math.max(...totalArray);
console.log(maximumNumber);

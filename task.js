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
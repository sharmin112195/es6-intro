const difference = (x, y) => x - y;
const differ = difference(90,4);
// console.log(differ);

const multiply = (first, second, third) => first * second * third;
const multi = multiply(5,7,9);
// console.log(multi);

// single parameter or no parameter:
const getAge = (person) => person.age;
const student = {name: 'ananata', age: 45}
const age = getAge(student);
// console.log(age);

const getThird = numbers => numbers[2];
const third = getThird ([5, 77, 66, 8, 90]);
// console.log(third);

// no parameter:
const getPI = () => Math.PI;
// console.log(getPI());

// large arrow function

const doMath = (x=0, y=0, z=0) => {
    const sum = x + y + z;
    const multi = x * y * z;
    const result = sum + multi;
    return result;
}
const total = doMath(2,3,99);
console.log(total);
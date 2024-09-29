const actor = {
    name: 'Anata',
    age: 30,
    phone: '017555',
    money: 50000000
}

// if right side is an object left side of destructuring will be object as well.
// use property name as a variable that contains the property value.
const {name, age, phone} = actor;

// change property name:
const {phone:mobile} = actor;


// const phone = actor.phone;
// const age = actor.age;
// const name = actor.name;

 console.log(mobile);
 console.log(mobile);
 
 console.log(age);
 console.log(age);
console.log(age);
console.log(name);
console.log(name);
console.log(name);

// array destructuring
const number = [45, 99];
const [first, second] = number;
console.log(first, second);

// advanced
function doubleThem(a,b){
    return[a*2, b*2];
}
const[protom, ditiyo] = doubleThem(6,9);
console.log(protom, ditiyo);
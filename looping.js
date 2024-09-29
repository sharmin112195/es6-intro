const numbers = [1, 6, 8, 4]
for(const num of numbers){
    console.log(num);
}
// string, number using for of loop 
const nobab = 'Siraj ud Doula';
for(const char of nobab){
    console.log(char);
}

// object using for in loop
const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
}
for(const key in glass){
    const value = glass[key]
    console.log(key, value);
}

// optional
const keys = Object.keys(glass);
console.log(keys);
for(const key of keys){
    const value = glass[key]
    console.log(key, value);
}
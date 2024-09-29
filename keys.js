const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
}
 console.log(glass);
const keys = Object.keys(glass);
console.log(keys);
const values = Object.values(glass);
console.log(values);

// Array of array / two dimensional array

const entries = Object.entries(glass);
console.log(entries);

// remove object property
delete glass.isCleaned;
// console.log(glass);

// new object add and object property remove:
const{isCleaned, ...shortGlass} = glass;
 console.log(shortGlass);

//  object freeze:
// Object.freeze(glass);
 glass.source = 'Bangladesh'
 console.log(glass);

// source use object modifai:
 Object.seal(glass);
glass.source ='Bangladesh';
glass.price = 500;
delete glass.name;
console.log(glass);
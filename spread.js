const max = Math.max(33, 4, 78, 90, 56);
const min = Math.min(33, 4, 78, 90, 56);
// console.log('Maximum value is:', max);
// console.log('Minimum value is:', min);

// array of element:
const numbers = [2, 45, 56, 4, 66, 78, 77, 90, 65, 44];
const arrayMax = Math.max(...numbers);
const arrayMin = Math.min(...numbers)
// console.log('max value:', arrayMax, 'min value:', arrayMin);

// use spread operator to copy:
const nums = [2, 4, 56, 7, 8];
const nums2 = [...nums];
 nums2.push(200);
 console.log(nums);
 console.log(nums2);

 const added = [...nums, 999, 211];
 console.log(added);
function add(num1, num2){
    const result = num1 + num2;
    // console.log(num1, num2, result);
    return result;
}
const sum = add(5, 7);
console.log(sum);

// default --> if value is not provided, take this as a default.

function subs(nums1= 9, nums2=20){
    const result2 = nums1 - nums2;
    return result2;
}
const sub = subs(30);
console.log(sub);

function fullName(first, last=''){
    const full = first + ' ' + last;
    return full;
}
const name = fullName('sharmin');
console.log(name);
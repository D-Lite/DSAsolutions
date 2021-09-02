// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321

// Example 2:

// Input: x = -123
// Output: -321

var reverse = function(x) {
    xconvert = x.toString().split('').reverse().join('').replace('-', '');
//     The steps above: convert to string; reverse the number; join them together; remove all negative signs
    
//     to check if the original value contains a negative value.
    checkNum = x < 0 ? parseInt(xconvert) * -1 : parseInt(xconvert);
    
//     To ensure it is a 32-bit integer (signed)
    return (checkNum > (2**31-1) || checkNum < (-(2**31-1))) ? 0 : checkNum;
    
};
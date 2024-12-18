let a = 0.1;
let b = 0.2;
console.log(a + b === 0.3)
//false
/// You are checking if 0.1 + 0.2 === 0.3. You expect true, but the result is false.
//
// The issue happens because computers cannot perfectly handle some decimal numbers like 0.1 and 0.2.
// When the computer adds them, the result is not exactly 0.3 but something close to it: 0.30000000000000004.
//
// Since 0.30000000000000004 is not the same as 0.3, the result of the comparison (===) is false.
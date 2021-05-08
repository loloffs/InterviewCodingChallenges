// Create a function named conditionalSum that will be given an
// array of numbers and a condition, in this case odd or even. 
//Given this condition, add up only the values which match that 
// condition. If no values match the condition, return 0.



function conditionalSum(values, condition) {
  let newArr = 0;
    for (let i = 0; i < values.length; i++){
      if (condition === 'even' && values[i] % 2 === 0) {
        newArr += values[i];
      } else if (condition === 'odd' && values[i] % 2 != 0) {
        newArr += values[i];
      }   
    }
  return newArr;
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));


// Expected output:

// 6
// 9
// 144
// 0
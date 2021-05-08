// Find the largest two numbers in an array of numbers

const largestTwoNums = function(arr) {
  arr.sort((a,b) => a-b)
  return [arr[arr.length-1], arr[arr.length-2]]
}

console.log(largestTwoNums([40, 100, 1, 300, 5, 25, 10]))
class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
};

function leftmostNodesSum(array) {
  // your code here
  let num = 0;
  let sum = array[0];
  while (((2 * num) + 1) < array.length) {
    num = (2 * num) + 1;
    sum += array[num];
  }
  return sum;
}

console.log(leftmostNodesSum([2, 7, 5, 2, 6, 0, 9]))
// => 11

module.exports = leftmostNodesSum

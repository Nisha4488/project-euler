//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.Find the sum of all the multiples of 3 or 5 below 1000.

// Simple approach to find out the sum of 3 or 5 multiple

function sumOfMultiple1(num) {
  var sum = 0;
  var addition = [];

// Finds multiple Of 3 and add into list
  for (var i = 0; i < num; i++) {
    if (i % 3 === 0) {
      addition.push(i);
    }
  }

// Finds multiple of 5 and add into list
  for (i = 0; i < num; i++) {
    if (i % 5 === 0 && i % 3 !== 0) {
      addition.push(i);
    }
  }
// Simply sum  the list
  for (i = 0; i < addition.length; i++) {
    sum = sum + addition[i];
  }
  return sum;
}
console.log('\n');
console.log("Answer of sumOfMultiple1:",sumOfMultiple1(100));
console.log("Answer of sumOfMultiple1:",sumOfMultiple1(20));

//Answer of sumOfMultiple1: 2318
//Answer of sumOfMultiple1: 78



//iterative approach from 0 to num, however used one loop block for both 3 and 5

function sumOfMultiple2(num) {
  var sum = 0;
  var addition = [];

  for (var i = 0; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      addition.push(i);
    }
  }

  // Simply sum  the list
  for (i = 0; i < addition.length; i++) {
    sum = sum + addition[i];
  }
  return sum;
}
console.log('\n');

console.log("Answer of sumOfMultiple2:",sumOfMultiple2(100));
console.log("Answer of sumOfMultiple2:",sumOfMultiple2(20));

//Answer of sumOfMultiple2: 2318
//Answer of sumOfMultiple2: 78
/**
 * Simple approach to find out the sum of 3 or 5 multiple
 * @param num
 * @returns {number}
 */
function sumOfMultiple1(num) {
  var startTime = new Date().getTime();
  var sum = 0;
  var addition = [];
  var i;

  // Find out multiple or 3 and add into list
  for (i = 0; i < num; i++) {
    if (i % 3 === 0) {
      addition.push(i);
    }
  }

  // Find out multiple or 3 and add into list
  for (i = 0; i < num; i++) {
    if (i % 5 === 0 && i % 3 !== 0) {
      addition.push(i);
    }
  }
  // Simply sum  the list
  for (i = 0; i < addition.length; i++) {
    sum = sum + addition[i];
  }
  console.log('Time taken ', new Date().getTime() - startTime);
  return sum;
}


console.log('sumOfMultiple1: Sum of Multiple for 10 is ', sumOfMultiple1(10));
console.log('sumOfMultiple1: Sum of Multiple for 20 is ', sumOfMultiple1(20));
console.log('sumOfMultiple1: Sum of Multiple for 1000 is ', sumOfMultiple1(1000));
console.log('sumOfMultiple1: Sum of Multiple for 100000000 is ', sumOfMultiple1(100000000))


/** Instead of iterating from 0 to num, let's iterate as a multiple of 3 or 5
 * @param num
 * @returns {number}
 */

function sumOfMultiple2(num) {
  var startTime = new Date().getTime();
  var sum = 0;
  var addition = [];
  var i;
  // iterate multiple of 3 and add into list
  for (i = 1; true; i++) {
    var multiple = 3 * i;
    if (multiple < num) {
      addition.push(multiple);
    } else {
      break;
    }
  }

  for (i = 1; true; i++) {
    multiple = 5 * i;
    if (multiple % 3 !== 0) {
      if (multiple < num) {
        addition.push(multiple);
      } else {
        break;
      }
    }

  }
  // Simply sum  the list
  for (i = 0; i < addition.length; i++) {
    sum = sum + addition[i];
  }
  console.log('Time taken ', new Date().getTime() - startTime);
  return sum;
}

console.log('\n\n');


console.log('sumOfMultiple2: Sum of Multiple for 10 is ', sumOfMultiple2(10));
console.log('sumOfMultiple2: Sum of Multiple for 20 is ', sumOfMultiple2(20));
console.log('sumOfMultiple2: Sum of Multiple for 1000 is ', sumOfMultiple2(1000));
console.log('sumOfMultiple2: Sum of Multiple for 100000000 is ', sumOfMultiple2(100000000));

/**
 * Use iterative approach from 0 to num, but use one loop block for both 3 and 5
 * @param num
 * @returns {number}
 */

function sumOfMultiple3(num) {
  var startTime = new Date().getTime();
  var sum = 0;
  var addition = [];
  var i;
  for (i = 0; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      addition.push(i);
    }
  }

  // Simply sum  the list
  for (i = 0; i < addition.length; i++) {
    sum = sum + addition[i];
  }
  console.log('Time taken ', new Date().getTime() - startTime);
  return sum;
}

console.log('\n\n');

console.log('sumOfMultiple3: Sum of Multiple for 10 is ', sumOfMultiple3(10));
console.log('sumOfMultiple3: Sum of Multiple for 20 is ', sumOfMultiple3(20));
console.log('sumOfMultiple3: Sum of Multiple for 1000 is ', sumOfMultiple3(1000));
console.log('sumOfMultiple3: Sum of Multiple for 100000000 is ', sumOfMultiple3(100000000));

/**
 * iterate as a multiple of 3 or 5 but use one block for both 3 and 5
 * @param num
 * @param @returns {number}
 */

function sumOfMultiple4(num) {
  var startTime = new Date().getTime();
  var sum = 0;
  var addition = [];
  var i;
  for (i = 1; true; i++) {
    var multipleOf3 = 3 * i;
    var multipleOf5 = 5 * i;

    if (multipleOf3 < num) {
      addition.push(multipleOf3);
    }

    if (multipleOf5 < num && multipleOf5 % 3 !== 0) {
      addition.push(multipleOf5);
    }

    if (multipleOf3 > num && multipleOf5 > num) {
      break;
    }

  }
  // Simply sum  the list
  for (i = 0; i < addition.length; i++) {
    sum = sum + addition[i];
  }
  console.log('Time taken ', new Date().getTime() - startTime);
  return sum;
}

console.log('\n\n');
console.log('sumOfMultiple4: Sum of Multiple for 10 is ', sumOfMultiple4(10));
console.log('sumOfMultiple4: Sum of Multiple for 20 is ', sumOfMultiple4(20));
console.log('sumOfMultiple4: Sum of Multiple for 1000 is ', sumOfMultiple4(1000));
console.log('sumOfMultiple4: Sum of Multiple for 100000000 is ', sumOfMultiple4(100000000));


/** Instead of iterating from 0 to num, let's iterate as a multiple of 3 or 5
 * @param num
 * @returns {number}
 */

function sumOfMultiple5(num) {
  var startTime = new Date().getTime();
  var sum = 0;
  var i;
  // iterate multiple of 3 and add into list
  for (i = 1; true; i++) {
    var multiple = 3 * i;
    if (multiple < num) {
      sum = sum + multiple;
    } else {
      break;
    }
  }

  for (i = 1; true; i++) {
    multiple = 5 * i;
    if (multiple % 3 !== 0) {
      if (multiple < num) {
        sum = sum + multiple;
      } else {
        break;
      }
    }

  }

  console.log('Time taken ', new Date().getTime() - startTime);
  return sum;
}

console.log('\n\n');
console.log('sumOfMultiple5: Sum of Multiple for 10 is ', sumOfMultiple5(10));
console.log('sumOfMultiple5: Sum of Multiple for 20 is ', sumOfMultiple5(20));
console.log('sumOfMultiple5: Sum of Multiple for 1000 is ', sumOfMultiple5(1000));
console.log('sumOfMultiple5: Sum of Multiple for 100000000 is ', sumOfMultiple5(100000000));
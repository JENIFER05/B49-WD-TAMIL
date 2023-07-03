
//1. Print odd numbers in an array:

// Anonymous function
const printOddNumbers = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
};

// IIFE
(function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
})([1, 2, 3, 4, 5]);


//2. Convert all the strings to title caps in a string array:

// Anonymous function
const convertToTitleCaps = function (arr) {
  const titleCapsArray = arr.map((str) =>
    str.toLowerCase().replace(/(?:^|\s)\S/g, (a) => a.toUpperCase())
  );
  return titleCapsArray;
};

// IIFE
const titleCapsArray = (function (arr) {
  return arr.map((str) =>
    str.toLowerCase().replace(/(?:^|\s)\S/g, (a) => a.toUpperCase())
  );
})(["hello", "world"]);

console.log(titleCapsArray);


//3. Sum of all numbers in an array:

// Anonymous function
const getSum = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

// IIFE
const sum = (function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
})([1, 2, 3, 4, 5]);

console.log(sum);


//4. Return all the prime numbers in an array:

// Anonymous function
const getPrimeNumbers = function (arr) {
  const isPrime = function (num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const primeNumbers = arr.filter((num) => isPrime(num));
  return primeNumbers;
};

// IIFE
const primeNumbers = (function (arr) {
  const isPrime = function (num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  return arr.filter((num) => isPrime(num));
})([2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(primeNumbers);


//5. Return all the palindromes in an array:

// Anonymous function
const getPalindromes = function (arr) {
  const isPalindrome = function (str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
  };

  const palindromes = arr.filter((str) => isPalindrome(str));
  return palindromes;
};

// IIFE
const palindromes = (function (arr) {
 

 const isPalindrome = function (str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
  };

  return arr.filter((str) => isPalindrome(str));
})(["level", "hello", "racecar", "world"]);

console.log(palindromes);


//6. Return median of two sorted arrays of the same size:

// Anonymous function
const getMedianOfSortedArrays = function (arr1, arr2) {
  const merged = arr1.concat(arr2);
  merged.sort((a, b) => a - b);

  const length = merged.length;
  const middle = Math.floor(length / 2);

  if (length % 2 === 0) {
    return (merged[middle - 1] + merged[middle]) / 2;
  } else {
    return merged[middle];
  }
};

// IIFE
const median = (function (arr1, arr2) {
  const merged = arr1.concat(arr2);
  merged.sort((a, b) => a - b);

  const length = merged.length;
  const middle = Math.floor(length / 2);

  if (length % 2 === 0) {
    return (merged[middle - 1] + merged[middle]) / 2;
  } else {
    return merged[middle];
  }
})([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]);

console.log(median);


//7. Remove duplicates from an array:

// Anonymous function
const removeDuplicates = function (arr) {
  const uniqueArray = [...new Set(arr)];
  return uniqueArray;
};

// IIFE
const uniqueArray = (function (arr) {
  return [...new Set(arr)];
})([1, 2, 2, 3, 3, 4, 5, 5]);

console.log(uniqueArray);


//8. Rotate an array by k times:

// Anonymous function
const rotateArray = function (arr, k) {
  const rotations = k % arr.length;
  const rotatedArray = arr.slice(rotations).concat(arr.slice(0, rotations));
  return rotatedArray;
};

// IIFE
const rotatedArray = (function (arr, k) {
  const rotations = k % arr.length;
  return arr.slice(rotations).concat(arr.slice(0, rotations));
})([1, 2, 3, 4, 5], 2);

console.log(rotatedArray);

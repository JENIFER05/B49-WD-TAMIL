//arrow functions:

//1. Print odd numbers in an array:
var printOddNumbers = (arr) => {
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
printOddNumbers(numbers);


//2. Convert all the strings to title caps in a string array:
function convertToTitleCaps(array) {
    for (let i = 0; i < array.length; i++) {
      let words = array[i].toLowerCase().split(' ');
      for (let j = 0; j < words.length; j++) {
        words[j] = words[j].charAt(0).toUpperCase() + words[j].slice(1);
      }
      array[i] = words.join(' ');
    }
    return array;
  }
  
  var strings = ['hello world', 'good morning', 'have a nice day'];
  var titleCapsArray = convertToTitleCaps(strings);
  console.log(titleCapsArray);
  


//3. Sum of all numbers in an array:

function sumArray(arr) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  
    return sum;
  }
  
  var numbers = [1, 2, 3, 4, 5];
  var  result = sumArray(numbers);
  console.log(result); // Output: 15
  


//4. Return all the prime numbers in an array:


function isPrime(num) {
    if (num < 2) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function findPrimes(array) {
    var primes = [];
  
    for (let num of array) {
      if (isPrime(num)) {
        primes.push(num);
      }
    }
  
    return primes;
  }
  
 
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var primes = findPrimes(numbers);
  console.log(primes);
  


//5. Return all the palindromes in an array:

function isPalindrome(str) {
    // Reverse the string and compare it with the original string
    var reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  
  function getPalindromes(arr) {
    // Use the filter method to create a new array of palindromes
    var palindromes = arr.filter((element) => isPalindrome(element));
    return palindromes;
  }
  
 var array = ['madam', 'racecar', 'hello', 'level', 'world'];
 var result = getPalindromes(array);
  
  console.log(result); 


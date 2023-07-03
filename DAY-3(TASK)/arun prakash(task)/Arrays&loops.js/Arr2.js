/*To find the average in the given array, you need to add only the numbers and 
then divide the sum by the number of numeric elements in the array */


const friendsInfo = [6, 12, 'Mari', 1, true, 'Munnabai', '200', 'CaptianAmerica', 8, 10];

let sum = 0;
let count = 0;

for (let i = 0; i < friendsInfo.length; i++) {
  if (typeof friendsInfo[i] === 'number') {
    sum += friendsInfo[i];
    count++;
  }
}

const average = sum / count;
console.log(average);


//The output will be: `7`.



//To print the contents of the `input` variable


var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];

function dataHandling(input) {
  for (var i = 0; i < input.length; i++) {
    console.log(input[i]);
  }
}

dataHandling(input);


//This will print each sub-array in the `input` array.

// object questions:

/*1. When you try to access `myobject.11`, it will throw an error because identifiers 
cannot start with numbers. To access the value corresponding to the key `"11"`, you should use bracket notation: `myobject["11"]`.*/


var myobject = {1: "one", "11": 1, "name": "arun"};

console.log(myobject["11"]);
console.log(myobject.name);

// Adding a new key-value pair
myobject.ten = "ten";

console.log(myobject);


/*The output will be:

```
1
arun
{1: "one", "11": 1, "name": "arun", ten: "ten"}*/


//2. To represent the data "Guvi, Geek, 6, IIT-M RP, Chennai" using an object literal

var data = {
  name: "Guvi",
  type: "Geek",
  age: 6,
  address: "IIT-M RP, Chennai"
};

console.log(data);


/*The output will be:
{ name: 'Guvi', type: 'Geek', age: 6, address: 'IIT-M RP, Chennai' }*/



//using a combination of object literals and arrays

var data = [
  {
    company: "Guvi",
    type: "Geek",
    age: 6,
    address: "IIT-M RP, Chennai"
  },
  {
    company: "Amazon, Inc",
    type: "31",
    age: "SP Infocity, Chennai"
  },
  {
    company: "Google",
    type: "Alphabet",
    age: 34,
    address: "Amphitheater Parkway, MountainView"
  },
  {
    company: "Tesla, Inc",
    type: "32",
    age: "333 Santana Row, San Jose"
  }
];

console.log(data);
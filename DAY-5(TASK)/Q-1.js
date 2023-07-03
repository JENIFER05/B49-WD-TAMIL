//1. `for` loop :

var jsonArray = [1, 2, 3, 4, 5];

for (let i = 0; i < jsonArray.length; i++) {
  console.log(jsonArray[i]);
}



//2. for...in:

var jsonObject = {
    "name": "John",
    "age": 30,
    "city": "New York"
  };

for (var key in jsonObject) {
  if (jsonObject.hasOwnProperty(key)) {
    console.log(key, jsonObject[key]);
  }
}


//3. `for...of`:

var jsonArray = [1, 2, 3, 4, 5];
for (var element of jsonArray) {
  console.log(element);
}

//4. for each:

var sum = 0;
var numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item) {
  sum += item;
}

console.log(sum);

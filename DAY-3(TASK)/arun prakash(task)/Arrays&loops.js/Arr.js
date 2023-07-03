// Count the elements in the array without using length property
var myarray = [11, 22, 33, 44, 55];
var count = 0;
for (var i in myarray) {
  count++;
}
console.log("Count of elements:", count);

// Create an array of favorite foods
var foods = ["Pizza", "Burger", "Ice Cream", "Sushi", "Chocolate Cake", "Pasta"];
console.log("Fifth favorite food:", foods[4]);
console.log("Length of foods array:", foods.length);

// Change the element "Mari" to "Munnabai"
var friends = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "Jeff", "AAK chandran"];
function dataHandling(input) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] === "Mari") {
      input[i] = "Munnabai";
    }
  }
  return input;
}
console.log("Updated friends array:", dataHandling(friends));

// Loop and print names until "CaptianAmerica" is found
const friends2 = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "Jeff", "AAK chandran"];
function dataHandling2(input) {
  for (var i = 0; i < input.length; i++) {
    console.log(input[i]);
    if (input[i] === "CaptianAmerica") {
      break;
    }
  }
}
console.log("Looping through friends2:");
dataHandling2(friends2);

// Check if a person is your friend
const friends3 = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "Jeff", "AAK chandran"];
function dataHandling3(input, name) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] === name) {
      return true;
    }
  }
  return false;
}
var isFriend = dataHandling3(friends3, "Jeff");
console.log("Is Jeff your friend?", isFriend);

// Combine two lists of friends into one alphabetically-sorted list
var friends1 = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "Jeff", "AAK chandran"];
var friends4 = ["Gabbar", "Rajinikanth", "Mass", "Spiderman", "Jeff", "ET"];
function dataHandling4(input1, input2) {
  var combinedFriends = input1.concat(input2);
  combinedFriends.sort();
  return combinedFriends;
}
console.log("Combined and sorted friends list:", dataHandling4(friends1, friends4));

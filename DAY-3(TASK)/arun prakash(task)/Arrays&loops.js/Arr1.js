//1. Get the first item, the middle item, and the last item of the array:
  
var friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
  ];
  
  var firstItem = friends[0];
  var middleItem = friends[Math.floor(friends.length / 2)];
  var lastItem = friends[friends.length - 1];
  
  console.log("First Item:", firstItem);
  console.log("Middle Item:", middleItem);
  console.log("Last Item:", lastItem);
  
  
  //2. Add your name to the end of the friends array and add another name to the beginning:
  
  var friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
  ];
  
  var yourName = "YourName";
  var anotherName = "AnotherName";
  
  friends.push(yourName);
  friends.unshift(anotherName);
  
  console.log(friends);
  
  
  //3. Add "Mr" or "Ms" to the names in the friends array:
  
  var friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
  ];
  
  for (var i = 0; i < friends.length; i++) {
    friends[i] = "Mr/Ms " + friends[i];
  }
  
  console.log(friends);
  
  
  //4. Concatenate all the names in the friends array and return as a comma-separated string:
  
  var friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
  ];
  
  var concatenatedString = friends.join(", ");
  console.log(concatenatedString);
  
  
  //5. Find the friends' names that have the letter 'a' and return the list:
  
  var friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
  ];
  
  var namesWithA = [];
  
  for (var i = 0; i < friends.length; i++) {
    if (friends[i].includes("a") || friends[i].includes("A")) {
      namesWithA.push(friends[i]);
    }
  }
  
  console.log(namesWithA);
  
  
  //6. Find the average length of all the friends' names:
  
  var friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
  ];
  
  var totalLength = 0;
  
  for (var i = 0; i < friends.length; i++) {
    totalLength += friends[i].length;
  }
  
  var averageLength = totalLength / friends.length;
  console.log("Average Length:", averageLength);
  
  
  //7. Find the names starting with the letter 'M' and return the list:
  
  var friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
  ];
  
  var namesStartingWithM = [];
  
  for (var i = 0; i < friends.length; i++) {
    if (friends[i][0].toUpperCase() === "M") {
      namesStartingWithM.push(friends[i]);
    }
  }
  
  console.log(namesStartingWithM);
  
  
  //8. Find the name with the maximum number of characters and return the name:
  
  var friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
  ];
  
  var maxLength = 0;
  var maxName = "";
  
  for (var i = 0; i < friends.length; i++) {
    if (friends[i].length > maxLength) {
      maxLength = friends[i].length;
      maxName = friends[i];
    }
  }
  
  console.log("Name with Max Characters:", maxName);
  
  
  //9.Find the name with the minimum number of characters and return the name:
  
  var friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
  ];
  
  var minLength = Infinity;
  var minName = "";
  
  for (var i = 0; i < friends.length; i++) {
    if (friends[i].length < minLength) {
      minLength = friends[i].length;
      minName = friends[i];
    }
  }
  
  console.log("Name with Min Characters:", minName);
  
  
  
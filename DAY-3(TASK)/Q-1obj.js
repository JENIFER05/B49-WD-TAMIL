/*how to compare two  json have the same properties without order
a. let obj1={name: "person 1",age:5};
b. let obj1={name: "person 1",age:5}; */


function compareJSON() {
    var obj1={name: "person 1",age:5};
    var obj2={age:5,name: "person 1"};
    
    //2. Compare the no of properties
    console.log(Object.keys(obj1).length);
    console.log(Object.keys(obj2).length);
    if(Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
    }

for(var key in obj1) {
    if(!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
      return false;
    }
  }
  
  return true;
}

const result = compareJSON();
console.log(result);
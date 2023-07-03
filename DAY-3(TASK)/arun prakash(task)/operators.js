

1. //Square of a number:

function square(number) {
  return number * number;
}

console.log(square(5)); // Output: 25


//2.Swapping 2 numbers:

function swapNumbers(a, b) {
  [a, b] = [b, a];
  console.log("After swapping: a =", a, "b =", b);
}

swapNumbers(3, 7); // Output: After swapping: a = 7 b = 3


//3. Addition of 3 numbers:

function addNumbers(a, b, c) {
  return a + b + c;
}

console.log(addNumbers(2, 4, 6)); // Output: 12


//4. Celsius to Fahrenheit conversion:

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

console.log(celsiusToFahrenheit(25)); // Output: 77


//5. Meter to miles:

function meterToMiles(meter) {
  return meter * 0.000621371;
}

console.log(meterToMiles(1000)); // Output: 0.621371


//6. Pounds to kg:

function poundsToKg(pounds) {
  return pounds * 0.453592;
}

console.log(poundsToKg(10)); // Output: 4.53592


//7. Calculate Batting Average:

function calculateBattingAverage(runs, innings) {
  return runs / innings;
}

console.log(calculateBattingAverage(500, 20)); // Output: 25


//8. Calculate five test scores and print their average:

function calculateAverage(scores) {
  let sum = scores.reduce((acc, score) => acc + score, 0);
  return sum / scores.length;
}

let testScores = [75, 80, 85, 90, 95];
console.log(calculateAverage(testScores)); // Output: 85


//9. Power of any number x ^ y:

function power(x, y) {
  return Math.pow(x, y);
}

console.log(power(2, 3)); // Output: 8


//10. Calculate Simple Interest:

function calculateSimpleInterest(principal, rate, time) {
  return (principal * rate * time) / 100;
}

console.log(calculateSimpleInterest(1000, 5, 2)); // Output: 100


//11. Calculate area of an equilateral triangle:

function calculateEquilateralTriangleArea(side) {
  return (Math.sqrt(3) * side * side) / 4;
}

console.log(calculateEquilateralTriangleArea(5)); // Output: 10.825317547305483


//12. Area of Isosceles Triangle:

function calculateIsoscelesTriangleArea(base, height) {
  return (base * height) / 2;
}

console.log(calculateIsoscelesTriangleArea(6, 8)); // Output: 24


//13. Volume of Sphere:

function calculateSphereVolume(radius) {
  return (4 / 3) * Math.PI * Math.pow(radius, 3);
}

console.log(calculateSphereVolume(5)); // Output: 523.5987755982989


//14. Volume of Prism:

function calculatePrismVolume(baseArea, height

) {
  return baseArea * height;
}

console.log(calculatePrismVolume(10, 15)); // Output: 150


//15. Find area of a triangle:

function calculateTriangleArea(base, height) {
  return (base * height) / 2;
}

console.log(calculateTriangleArea(6, 8)); // Output: 24


//16. Calculate Discount Of Product:

function calculateDiscount(actualCost, soldCost) {
  let discount = actualCost - soldCost;
  let discountPercentage = (discount / actualCost) * 100;
  return discountPercentage;
}

console.log(calculateDiscount(100, 80)); // Output: 20


//17. Given the radius of a circle, find its diameter, circumference, and area:

function calculateCircleProperties(radius) {
  let diameter = 2 * radius;
  let circumference = 2 * Math.PI * radius;
  let area = Math.PI * Math.pow(radius, 2);
  return {
    diameter: diameter,
    circumference: circumference,
    area: area
  };
}

console.log(calculateCircleProperties(5));
// Output: { diameter: 10, circumference: 31.41592653589793, area: 78.53981633974483 }


//18. Given two numbers, perform all arithmetic operations:

function performArithmeticOperations(a, b) {
  let sum = a + b;
  let difference = a - b;
  let product = a * b;
  let quotient = a / b;
  let remainder = a % b;

  return {
    sum: sum,
    difference: difference,
    product: product,
    quotient: quotient,
    remainder: remainder
  };
}

console.log(performArithmeticOperations(10, 3));
/*
Output:
{
  sum: 13,
  difference: 7,
  product: 30,
  quotient: 3.3333333333333335,
  remainder: 1
}
*/


//19. Display the asterisk pattern without using loops:

let asteriskPattern = "*".repeat(5) + "\n";
console.log(asteriskPattern.repeat(5));
/*
Output:
*****
*****
*****
*****
*****
*/


//20. Calculate electricity bill:

function calculateElectricityBill(units, rate) {
  return units * rate;
}

console.log(calculateElectricityBill(100, 10)); // Output: 1000


//21. Program to calculate CGPA:

function calculateCGPA(subjects) {
  let totalCredits = 0;
  let totalGradePoints = 0;

  subjects.forEach(subject => {
    totalCredits += subject.credits;
    totalGradePoints += subject.grade * subject.credits;
  });

  return totalGradePoints / totalCredits;
}

let subjectList = [
  { name: "Math", grade: 9, credits: 3 },
  { name: "English", grade: 8, credits: 2 },
  { name: "Science", grade: 9, credits: 3 },
  { name: "History", grade: 7, credits: 2 }
];

console.log(calculateCGPA(subjectList)); // Output: 8.3


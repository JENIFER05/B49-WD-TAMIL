

//1.Get all the countries from the Asia continent/region using the `filter` function:

var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all', true);
request.send();

request.onload = function() {
  if (request.status === 200) {
    const data = JSON.parse(request.responseText);
    const asiaCountries = data.filter(country => country.region === 'Asia');
    console.log(asiaCountries);
  }
};


//2.Get all the countries with a population of less than 2 lakhs using the `filter` function:

var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all', true);
request.send();

request.onload = function() {
  if (request.status === 200) {
    var data = JSON.parse(request.responseText);
    var smallPopulationCountries = data.filter(country => country.population < 200000);
    console.log(smallPopulationCountries);
  }
};


//3.Print the following details (name, capital, flag) using the `forEach` function:


var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all', true);
request.send();

request.onload = function() {
  if (request.status === 200) {
    var data = JSON.parse(request.responseText);
    data.forEach(country => {
      console.log(`Name: ${country.name.common}`);
      console.log(`Capital: ${country.capital}`);
      console.log(`Flag: ${country.flags.svg}`);
      console.log('---');
    });
  }
};


//4. Print the total population of countries using the `reduce` function:


var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all', true);
request.send();

request.onload = function() {
  if (request.status === 200) {
   var data = JSON.parse(request.responseText);
    var totalPopulation = data.reduce((accumulator, country) => accumulator + country.population, 0);
    console.log(`Total population: ${totalPopulation}`);
  }
};


//5. Print the country which uses US Dollars as currency:


var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all', true);
request.send();

request.onload = function() {
  if (request.status === 200) {
    var data = JSON.parse(request.responseText);
    var usDollarCountry = data.find(country => country.currencies.USD);
    console.log(`Country using US Dollars: ${usDollarCountry.name.common}`);
  }
};

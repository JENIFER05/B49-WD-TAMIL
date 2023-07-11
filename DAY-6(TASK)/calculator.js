class UberPriceCalculator {
    constructor(baseFare, costPerMinute, costPerMile, bookingFee) {
      this.baseFare = baseFare;
      this.costPerMinute = costPerMinute;
      this.costPerMile = costPerMile;
      this.bookingFee = bookingFee;
    }
  
    calculatePrice(distanceInMiles, durationInMinutes) {
      var distanceCost = this.costPerMile * distanceInMiles;
      var durationCost = this.costPerMinute * durationInMinutes;
  
      var totalPrice = this.baseFare + distanceCost + durationCost + this.bookingFee;
      return totalPrice.toFixed(2); // Round to two decimal places
    }
  }
  var baseFare = 2.50;
  var costPerMinute = 0.15;
  var costPerMile = 1.25;
  var bookingFee = 1.50;
  
 var calculator = new UberPriceCalculator(baseFare, costPerMinute, costPerMile, bookingFee);
  var distanceInMiles = 5.2;
  var durationInMinutes = 20;
  
  const totalPrice = calculator.calculatePrice(distanceInMiles, durationInMinutes);
  console.log(`Uber Price: Rs${totalPrice}`);
  
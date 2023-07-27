function countdown(number, callback) {
    setTimeout(function () {
      if (number > 0) {
        console.log(number);
        countdown(number - 1, callback);
      } else {
        callback();
      }
    }, 1000);
  }
  
  countdown(10, function () {
    setTimeout(function () {
      console.log("Happy independence day");
    }, 1000);
  });
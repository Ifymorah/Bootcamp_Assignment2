
var app = { 
  getPrime: function (n) {
  var prime_number = [ ]; //creates an empty array that will be used to display result
    for (counter = 2; counter <= n; counter++) {
    
    var not_prime = false;
    var roundnum = Math.floor(Math.sqrt(counter)); //this minimizes the nuumber of iterations to be done in a single operation
    
    for (var i = 2; i <= roundnum; i++) { 
      if (counter%i === 0 && i !== counter) {
        not_prime = true;
        }
    }
    if (not_prime === false) {
      prime_number.push(counter); //populates the array with confirmed prime numbers
    }
  }
return prime_number;
} //Big O notation for this function is Log linear (nlogn) as a result of the Math.sqrt operation
}
module.exports = app;


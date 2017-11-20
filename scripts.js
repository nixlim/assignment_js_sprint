// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(someArray) {
      var maxEL = someArray.reduce(function(a, b) {
          return Math.max(a, b);
      });
      return maxEL;
  },

  reversed: function(string){
      return string.split("").reverse().join("");
  },

  loudSnakeCase: function(string){
      //break into words first
      return string.match(/\w+/g).map(
          (cap) => cap[0].toUpperCase() + cap.slice(1)
      ).join("_");

  },

  compareArrays: function(){
    // your code here (replace the return)
    return "Finish compareArrays first!"
  },

  fizzBuzz: function(){
    // your code here
  },

  myMap: function(){
    // your code here
  },

  primes: function(){
    // your code here
  },
}
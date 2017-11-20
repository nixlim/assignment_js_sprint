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
      var test = string.split(RegExp('\\b'));
      var test2 = test.filter(a => a !== RegExp('[a-z]'));
      console.log(test2);
    // your code here
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
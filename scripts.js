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
      var str2arr = string.split(RegExp('\\b'));
      var re = new RegExp('^\\w')
      var filtered = [], i = str2arr.length;
      while (i--) {
          if (re.test(str2arr[i])) {
              filtered.push(str2arr[i]);
          }
      }
      var filteredReversed = filtered.reverse().map(function(cap){
          return (cap.charAt(0).toUpperCase() + cap.slice(1));
      }).join("_");
      return filteredReversed;
      console.log(filteredReversed);

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
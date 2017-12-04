// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(someArray) {
      //Method 1 - the Easy Way
      // return someArray.reduce((a, b) => Math.max(a, b));
      //Method 2 - the Loop
      //First, we set the maximum value to null, to evaluate empty arrays.
      //Then we loop through the array, comparing each element to our maximum and changing maximum as appropriate
      var max = null;
      someArray.forEach(function(el){
          if (max === null || el > max){
              max = el;
          }
      });
      return max;

  },

  reversed: function(string){
      //Method 1 - the Easy Way
      // return string.split("").reverse().join("");
      //Method 2 - the Loop
      //Strings are immutable, stupid! Build new string from old string, back to front.
      var newStr = "";
      for (var i = string.length; i >= 0; i--) {
          newStr = newStr + string.charAt(i);
      }
      return newStr;
  },

  loudSnakeCase: function(string){
      //break into words first
      return string.match(/\w+/g).map(
          (cap) => cap[0].toUpperCase() + cap.slice(1)
      ).join("_");
  },

  compareArrays: function(array1, array2){
      if (array1.length != array2.length) {
          return false;
      }
      for (var i = 0; i < array1.length; i++) {
          if (array1[i] !== array2[i]){
              return false;
          }
      }
      //everything matches
      return true;
  },


  fizzBuzz: function(num){
      var result = [];
      //cycle through elements, test each then push into array
      for (var i = 1; i <= num; i++){
          //test for both 3&5 divisibility
          if (i % 3 == 0 && i % 5 == 0) {
              result.push('FIZZBUZZ');
          } else if (i % 3 == 0){ //test for 3 divisibility
              result.push('FIZZ');
          } else if (i % 5 == 0){ //test for 5 divisibility
              result.push('BUZZ');
          } else { //feed all remaining elements as is
              result.push(i);
          }
      }
      //return the final array for comparison
      return result;

  },

  myMap: function(someArray,someFunction){
      var results = [];
      for (var i = 0; i < someArray.length; i++) {
          results[i] = someFunction(someArray[i]);
      }
      return results;
  },

  primes: function(num){
      var result = [];
      //If num is 1,2 - empty array
      for (var i = 2; i < num; i++) {
          //simple and inefficient but ok for small numbers
          var isPrime = true; //flag variable
          for (var j = 2; j <= Math.floor(Math.sqrt(i)); j++){
              //if there is no remainder, it's not a prime
              if (i % j == 0) {
                  //i is not a prime = set a flag
                  isPrime = false;
                  // no need to count through the rest
                  break;
              }
          }
          if (isPrime) {
            result.push(i);
          }
      }
      // as we have been pushing, so we reverse
       return result;
  },
}
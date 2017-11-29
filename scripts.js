// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(someArray) {
      //Method 1 - the Easy Way
      // return someArray.reduce((a, b) => Math.max(a, b));
      //Method 2 - the Loop
      //First, we set the maximum value to the first element in the array.
      //Then we loop through the array, comparing each element to our maximum and changing maximum as appropriate
      var max = someArray[0];
      for (i=1; i<someArray.length; i++){
          if (someArray[i]>max){
              max = someArray[i];
          }
      }
      return max;

  },

  reversed: function(string){
      //Method 1 - the Easy Way
      // return string.split("").reverse().join("");
      //Method 2 - the Loop
      //Strings are immutable, stupid! Build new string from old string, back to front.
      var newStr = "";
      for (i = string.length;i > -1; i--) {
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
      //set results placeholder
      var resultsArray = [];
      //check the length of arrays
      if (array1.length == array2.length) {
          //compare the array element by element and populate placeholder array
          for (i = 0; i < array1.length; i++) {
              if (array1[i] === array2[i]){
                  resultsArray[i] = true;
              } else {
                  resultsArray[i] = false;
              }
          }
          //return the correct value for the results array
          return resultsArray.includes(false) ?  false : true;
      } else {
          return false;
      }
  },

  fizzBuzz: function(num){
      //set up an array for results
      var myArray = [];
      //cycle through elements, test each then push into array
      for (i = 1; i < num+1; i++){
          //test for both 3&5 divisibility
          if ((i%3 == 0) && (i%5 == 0)) {
              myArray.push('FIZZBUZZ');
          //test for 3 divisibility
           } else if ((i%3 == 0) && !(i%5 == 0)){
              myArray.push('FIZZ');
          //test for 5 divisibility
          } else if ((i%5 == 0) && !(i%3 == 0)){
              myArray.push('BUZZ');
          //feed all remaining elements as is
          } else {
              myArray.push(i);
          }
      }
      //return the final array for comparison
      return myArray;

  },

  myMap: function(){
    // your code here
  },

  primes: function(){
    // your code here
  },
}
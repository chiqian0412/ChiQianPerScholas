/* 
1. Define a function  maxOfTwoNumbers  that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

maxOfTwoNumbers = (num1, num2) => {
    // ADD YOUR CODE HERE
    if (num1 > num2) {
      return num1;
    } else if (num1 < num2) {
      return num2;
    } else {
      return num1;
    }
  };
  console.log(maxOfTwoNumbers(11, 10));
  
  /*
  2. Define a function  maxOfThree  that takes three numbers as arguments and returns the largest of them.
  */
  maxOfThree = (num1, num2, num3) => {
    // ADD YOUR CODE HERE
    if (num1 > num2 && num1 > num3) {
      return num1;
    } else if (num2 > num1 && num2 > num3) {
      return num2;
    } else {
      return num3;
    }
  };
  console.log(maxOfThree(5,6,7));
  
  /*
  3. Write a function  isCharacterAVowel  that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  */
  isCharacterAVowel = (char) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < vowels.length; i++) {
      if (char === vowels[i]) {
        return true;
      }
    }
    return false;
  };
  console.log(isCharacterAVowel("i"))
  
  
  /*
  4. Define a function  sumArray  and a function  multiplyArray  that sums and multiplies (respectively) all the numbers in an array of numbers. For example,  sumArray([1,2,3,4])  should return 10, and  multiplyArray([1,2,3,4])  should return 24.
  */
  sumArray = (array) => {
    // ADD YOUR CODE HERE
    var sum = 0;
    for (let i = 0; i < array.length; i++) {
  
      sum += array[i];
  
    } return sum;
  };
  console.log(sumArray([1, 2, 3, 4]))
  multiplyArray = (array) => {
    var multiply = 1;
    for (let i = 0; i < array.length; i++) {
  
      multiply *= array[i];
  
    } return multiply;
  }
  console.log(multiplyArray([1, 2, 3, 4]))
  
  /*
  5.Write a function that returns the number of arguments passed to the function when called.
  */
  function auguNum() {
    var num = arguments.length;
    console.log(num)
  }
  auguNum(1, 2, 3, 4, 5, 6)
  
  /*
  6. Define a function  reverseString  that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
  */
  reverseString = (str) => {
    // ADD YOUR CODE HERE
    return str.split("").reverse().join("");
  };
  console.log(reverseString("jag testar"))
  
  /*
  7. Write a function  findLongestWord  that takes an array of words and returns the length of the longest one.
  */
  findLongestWord = (wordArray) => {
    // ADD YOUR CODE HERE
    var longestWord = 0;
    for (let i = 0; i < wordArray.length; i++) {
      if (wordArray[i].length > longestWord) {
        longestWord = wordArray[i].length;
      }
    }
    return longestWord;
  };
  
  console.log(findLongestWord(['chi', 'hello', 'in', 'longest']))
  
  /*
  8. Write a function  filterLongWords  that takes an array of words and a number  i  and returns the array of words that are longer than i characters long.
  */
  filterLongWords = (array1, i) => {
    // ADD YOUR CODE HERE
    var longerWord = [];
    for (let x = 0; x < array1.length; x++) {
      if (array1[x].length > i) {
        longerWord.push(array1[x]);
      }
    }
    return longerWord;
  };
  console.log(filterLongWords(['chi', 'hello', 'in', 'longest'], 2))
  
  /* Bonus
  
  1. Add a method reverseString (from question 6) to the object String so that it is possible to call: "Per Scholas".reverseString().
  */
  String.prototype.reverseString = function() {
    return this.split("").reverse().join("");
  }
  
  var text = "html and css";
  
  console.log(text.reverseString());
  
  /*
  2.Write a function that takes a string as argument and returns an object where:
  the keys are the characters that occur in the string
  the values are the number of occurrences for each letter, regardless of the case 
  */
  
  everyLetterNum = (str) => {
    var count = {};
    var str1 = str.split(' ').join('');
    var str2 = str1.toLowerCase().split('').sort();
    str2.forEach(
      function(s) {
        count[s] ? count[s]++ : count[s] = 1;
      }
    );
    return count;
  }
  console.log(everyLetterNum('Whats for dinner tomorrow'))
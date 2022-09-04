function isPalindrome(word) {
  // Write your algorithm here
  const arrayValues = word.split(''); // converting our string to an array
  const reverseArrayValues = arrayValues.reverse() // reversing our array values
  // checks whether characters match
  const reverseWord = reverseArrayValues.join(''); // converting our array back to string
  if (word.toLowerCase() === reverseWord) { //checking our word to lowercase
    console.log('Is a palindrome')
    return true
  } else {
    console.log('not a palindrome')
    return false
  }
}
isPalindrome('abba');

/* 
  Add your pseudocode here
  
declare a function isPalindrome(that receives one string argument)
iterate over the string argument
  if the string(in lowercase) is a palidrome 
    return true
  else
    return false
*/


/*
  Add written explanation of your solution here

I converted the string to an array and then reversed the characters in the array 
to check if they were matching hence a palindrome.

I added console.log() to test the output

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

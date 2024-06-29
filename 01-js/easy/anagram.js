/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false; 
    
  }

  str1 = str1.replace(/[^\w]/g,'').toLowerCase(str1);
  str2 = str2.replace(/[^\w]/g,'').toLowerCase(str2);

  let arr1 = str1.split('').sort().join('');
  let arr2 = str2.split('').sort().join('');

  return arr1 == arr2;
}

module.exports = isAnagram;

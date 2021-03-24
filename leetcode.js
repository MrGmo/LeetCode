


// Write a function that makes this string uppercase and sorts it in alphabetical order by last name.When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// function meeting(str){
//   let newArr = []
//   let newStr = str.toUpperCase().replace(/([\w]+):([\w]+)/g, '$2 $1').split(';').sort((a, b) => {return a > b ? 1 : -1});
//
//   for(let i = 0; i < newStr.length; i++){
//     newArr.push('(' + newStr[i].replace(' ', ', ') + ')')
//   }
//   return newArr.join('')
// }
//
//
// console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))

// should return:
// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

// Better version
// const meeting = s => {
//   return s.toUpperCase()
//          .replace(/(\w+):(\w+)/g, "($2, $1)")
//          .split(';')
//          .sort()
//          .join('')
// };
//

// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
//
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.


// function removeDuplicates(nums) {
//     let newArr = [...new Set(nums)]
//     return newArr.length
// };
//
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))


// Given an input string s, reverse the order of the words.
//
// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
//
// Return a string of the words in reverse order concatenated by a single space.
//
// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

//
// function reverseWords(str){
//   return str.trim().split(' ').reverse().join(' ').replace(/\s+/g, ' ')
// }
//
// console.log(reverseWords("  hello world  "))


// Given an integer x, return true if x is palindrome integer.
//
// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.


// function isPalindrome(x){
//   let pali = String(x).split('').reverse().join('')
//   return x === Number(pali)
// }
//
//
// console.log(isPalindrome(121))

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

/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times.
You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

function findMaj (arr) {
    let numMap = {},
        count = 0,
        majEle = arr[0]

for (const num of arr){
    numMap[num] = numMap[num] +1 || 1
}
for (const n in numMap){
    if(numMap[n] > count){
        count = numMap[n]
        majEle = n
    }
} return majEle
    }
  


console.log(findMaj([2,2,1,1,1,2,2]))
console.log(findMaj([3,2,3]))
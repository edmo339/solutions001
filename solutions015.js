
/*A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the original number. If this seems confusing, refer to the example below.

Ex: 153, where l = 3 ( the number of digits in 153 )
13 + 53 + 33 = 153

Write a function that, given n, returns whether or not n is a Narcissistic Number.
*/

function isNarcissistic(n) {
    let myFunc = num => Number(num);
    var intArr = Array.from(String(n), myFunc);
    
    let a = intArr.map(num => Math.pow(num, intArr.length))
    let sum = a.reduce((acc, c) => acc + c, 0)
    console.log(sum)
    console.log(intArr)
    console.log(a)
    if (sum === n){
      return true
    }
    else return false
  }

  console.log(isNarcissistic(153))

  return n === +n.toString().split('').reduce((s, v, i, arr) => s + Math.pow(v, arr.length),0)

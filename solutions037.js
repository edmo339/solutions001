/*
Fizz Buzz
Given a number as an input, print out every integer from 1 to that number. 
However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”;
 when it’s divisible by both 2 and 3, print out “Fizz Buzz”.
*/


function fizzBuzz (n) {
    for(let i =0; i< n; i++){
        if (i % 2 && i % 3 === 0 ) {
            console.log("FizzBuzz")
        }else if ( i % 2  === 0) {
            console.log("Fizz")    
        }else if ( i % 3  === 0) {
            console.log("Buzz")    
            }
        }
}

fizzBuzz(25)


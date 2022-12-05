/*
Given a string of characters as input, 
write a function that returns it with the characters reversed. 
No Reverse Method (well brute force it first, but then no reverse method)! 


describe("String Reversal", () => {
 it("Should reverse string", () => {
  assert.equal(reverse("Hello World!"), "!dlroW olleH");
 });
});

*/

function stringReverse (str) {
    let reversedString = str.split('').reduce((res, letter) => letter + res)
    return reversedString
}


console.log(stringReverse('Hello World!'))
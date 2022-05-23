//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.



function arrayMadness(a, b) {
    let resA = a.map( x => Math.pow(x, 2))
    let resB = b.map ( z => Math.pow(z, 3))
    let sumA = resA.reduce((acc, c) => acc + c, 0)
    let sumB = resB.reduce((acc , c) => acc + c, 0)
  if (sumA > sumB){
    return true
  }
  else{ 
    return false
  }
  }


  
  function arrayMadness(a, b) {
    return a.reduce( (sum, el) => sum + el ** 2, 0) >
           b.reduce( (sum, el) => sum + el ** 3, 0);
  }
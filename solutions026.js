/*
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") == "Hi"
remove("Hi!!!") == "Hi!!"
remove("!Hi") == "!Hi"
remove("!Hi!") == "!Hi"
remove("Hi! Hi!") == "Hi! Hi"
remove("Hi") == "Hi"

function remove (string) {

    if (string.endsWith('!')){
        string = string.slice(0,-1)
        
}
  return string
  }
  */
  function remove(s){
    //coding and coding....
    return s = s.replace(/!$/g, '')}

  console.log(remove("Hi! Hi!!!!"))
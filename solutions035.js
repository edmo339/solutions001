/*
You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
dup(["kelless","keenness"]) = ["keles","kenes"].
Strings will be lowercase only, no spaces 

dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
dup(["kelless","keenness"]), ['keles','kenes'])
*/

// map => spllit - filter = join

function removeDups (arr){
    return arr.map(
        word => word.split("").filter((l, i, a) => l != a[i-1]).join("")
    )  
}

console.log(removeDups(["abracadabra","allottee","assessee"])) 
console.log(removeDups(["kelless","keenness"]))
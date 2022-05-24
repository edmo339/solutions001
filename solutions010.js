function minSum(arr) {
  /*
    Introduction and Warm-up (Highly recommended)
    Playing With Lists/Arrays Series
    Task
    Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
    
    Notes
    Array/list will contain positives only .
    Array/list will always has even size
    Input >> Output Examples
    minSum({5,4,2,3}) ==> return (22) 
    Explanation:
    The minimum sum obtained from summing each two integers product , 5*2 + 3*4 = 22
  */
    
    function minSum(arr) {
        var res=0;
        arr = arr.sort((a,b)=>a-b);
        
        while(arr.length){
          res += arr.pop()*arr.shift();
          }
        
        return res
      }


  console.log(minSum([5,4,2,3]))

  console.log(minSum([12,6,10,26,3,24]))
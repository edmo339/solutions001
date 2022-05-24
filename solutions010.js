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
    arr.sort((a, b) => a - b)
    if ( arr.length < 5){
       return (arr[0] * arr[arr.length -1]) + (arr[1] * arr[arr.length - 2])
      }
    else if (arr.length < 7) {
      return (arr[0] * arr[arr.length -1]) + (arr[1] * arr[arr.length - 2]) + (arr[2] * arr[arr.length -3])
    }
    else {
        return (arr[0] * arr[arr.length -1]) + (arr[1] * arr[arr.length - 2]) 
        + (arr[2] * arr[arr.length -3]) + (arr[3] * arr[arr.length -4])
    }
    }


  console.log(minSum([5,4,2,3]))

  console.log(minSum([12,6,10,26,3,24]))
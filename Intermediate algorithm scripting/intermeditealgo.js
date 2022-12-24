//   ----------------------------------------------------------------------------------------------------
function sumAll(arr) {
    let  start= Math.min(arr[0], arr[1]);
    let  end= Math.max(arr[0], arr[1]);
    let sum=0
    for(let i=start; i<=end; i++ ){
      sum += i
    }
    return sum;
  }
  
  sumAll([1, 4]);
//   ----------------------------------------------------------------------------------------------------
function diffArray(arr1, arr2) {
    const newArr = [];
  
    function FindUnique(arr1, arr2) {
  
      for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
  
          newArr.push(arr1[i]);
        }
      }
    }
  
    FindUnique(arr1, arr2);
    FindUnique(arr2, arr1);
  
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
//   ----------------------------------------------------------------------------------------------------
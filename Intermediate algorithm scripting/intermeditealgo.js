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
function destroyer(arr) {
  const Remove = Object.values(arguments).slice(1);
  const filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    let remove = false;
    for (let j = 0; j < Remove.length; j++) {
      if (arr[i] === Remove[j]) {
        remove = true;
      }
    }
    if (!remove) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}
//   ----------------------------------------------------------------------------------------------------
function whatIsInAName(collection, source) {
  const Keys = Object.keys(source);
  return collection.filter(obj => {
    for (let i = 0; i < Keys.length; i++) {
      if (!obj.hasOwnProperty(Keys[i]) ||
          obj[Keys[i]] !== source[Keys[i]]) {
        return false;
      }
    }
    return true;
  });
}


whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, 
                { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
//   ----------------------------------------------------------------------------------------------------
function spinalCase(str) {
  var regex = /\s+|_+/g;

  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  return str.replace(regex, "-").toLowerCase();
}


spinalCase("This Is Spinal Tap");
//   ----------------------------------------------------------------------------------------------------

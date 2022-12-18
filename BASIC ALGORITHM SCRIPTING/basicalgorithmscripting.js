// ------------------------------------------------------------------------------------------------------------------------
function convertCtoF(celsius) {
    let fahrenheit;
    fahrenheit = (celsius*(9/5)) + 32
    return fahrenheit;
  }
  
  convertCtoF(30);
// ------------------------------------------------------------------------------------------------------------------------
function reverseString(str) {
    let reversedstring = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedstring += str[i];
    }
    return reversedstring;
  }
  
  reverseString("hello");
// ------------------------------------------------------------------------------------------------------------------------
function factorialize(num) {
    let fact = 1
    for(let i=num; i>0; i-- ){
      fact *= i
    }
    return fact;
  }
  
  factorialize(5);
// ------------------------------------------------------------------------------------------------------------------------
function findLongestWordLength(str) {
    let word = str.split(' ');
    let max = 0;
  
    for (let i = 0; i < word.length; i++) {
      if (word[i].length > max) {
        max = word[i].length;
      }
    }
  
    return max;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
// ------------------------------------------------------------------------------------------------------------------------
function largestOfFour(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      let largestNumber = arr[i][0];
      for (let j = 1; j < arr[i].length; j++) {
        if (arr[i][j] > largestNumber) {
          largestNumber = arr[i][j];
        }
      }
      result[i] = largestNumber;
    }
  
    return result;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// ------------------------------------------------------------------------------------------------------------------------
function confirmEnding(str, target) {
    return str.slice(-target.length) === target
  }
  
  confirmEnding("Bastian", "n");
// ------------------------------------------------------------------------------------------------------------------------
function repeatStringNumTimes(str, num) {
    let newStr = ""
    for (let i = 0; i < num; i++) {
      newStr += str;
    }
    return newStr;
  }
  
  repeatStringNumTimes("abc", 3);
// ------------------------------------------------------------------------------------------------------------------------
function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);
// ------------------------------------------------------------------------------------------------------------------------
function findElement(arr, func) {
    let num = 0;
    for(let i=0; i<arr.length; i++){
      if(func(arr[i])){
        return arr[i];
        break;
      }
    }
    return undefined;
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);
// ------------------------------------------------------------------------------------------------------------------------
function booWho(bool) {
    return typeof bool === "boolean";
  }
  
  booWho(null);
// ------------------------------------------------------------------------------------------------------------------------
function titleCase(str) {
    const newTitle = str.split(" ");
    const updatedTitle = [];
    for (let st in newTitle) {
      updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
    }
    return updatedTitle.join(" ");
  }
  
  titleCase("I'm a little tea pot");
// ------------------------------------------------------------------------------------------------------------------------
function frankenSplice(arr1, arr2, n) {
    let newArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
      newArray.splice(n, 0, arr1[i]);
      n++;
    }
    return newArray;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);
// ------------------------------------------------------------------------------------------------------------------------
function bouncer(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) newArr.push(arr[i]);
    }
    return newArr;
  }
  bouncer([7, "ate", "", false, 9]);
// ------------------------------------------------------------------------------------------------------------------------
function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= num) return i;
    }
    return arr.length;
  }
  getIndexToIns([40, 60], 50);
// ------------------------------------------------------------------------------------------------------------------------
function mutation(arr) {
    const test = arr[1].toLowerCase();
    const target = arr[0].toLowerCase();
    for (let i = 0; i < test.length; i++) {
      if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
  }
  
  mutation(["hello", "hey"]);
// ------------------------------------------------------------------------------------------------------------------------
function chunkArrayInGroups(arr, size) {
    let temp = [];
    const result = [];
    for (let a = 0; a < arr.length; a++) {
      if (a % size !== size - 1) temp.push(arr[a]);
      else {
        temp.push(arr[a]);
        result.push(temp);
        temp = [];
      }
    }
    if (temp.length !== 0) result.push(temp);
    return result;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);
// ------------------------------------------------------------------------------------------------------------------------
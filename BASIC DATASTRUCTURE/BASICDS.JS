// ---------------------------------------------------------------------------------------------------
let yourArray = ["Jay", 2003, true, "Krutik", 2003, false];
// ---------------------------------------------------------------------------------------------------
let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "This is how we can change the value at any index.";
// Only change code above this line
console.log(myArray);
// ---------------------------------------------------------------------------------------------------
function mixedNumbers(arr) {
  // Only change code below this line
  arr.unshift("I", 2, "three");
  arr.push(7, "VIII", 9);
  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(["IV", 5, "six"]));
// ---------------------------------------------------------------------------------------------------
function popShift(arr) {
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}

console.log(popShift(["challenge", "is", "not", "complete"]));
// ---------------------------------------------------------------------------------------------------
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(1, 4);
// Only change code above this line
console.log(arr);
// ---------------------------------------------------------------------------------------------------
function htmlColorNames(arr) {
  // Only change code below this line
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  // Only change code above this line
  return arr;
}

console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurquoise",
    "FireBrick",
  ])
);
// ---------------------------------------------------------------------------------------------------
function forecast(arr) {
  // Only change code below this line
  let newArr = arr.slice(2, 4);
  return newArr;
}

// Only change code above this line
console.log(
  forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);
// ---------------------------------------------------------------------------------------------------
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr.push([...arr]);
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));
// ---------------------------------------------------------------------------------------------------
function quickCheck(arr, elem) {
  // Only change code below this line
  if (arr.indexOf(elem) >= 0) {
    return true;
  } else {
    return false;
  }
  // Only change code above this line
}

console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
// ---------------------------------------------------------------------------------------------------
function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      //Checks every parameter for the element and if is not there continues the code
      newArr.push(arr[i]);
      //Inserts the element of the array in the new filtered array
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
);
// ---------------------------------------------------------------------------------------------------

let myNestedArray = [
  // change code below this line
  ["Jay", false, 9, 10, 11, "Krutik", "JAYY"],
  ["JAY", "KRUTIK", 9, 10, 11, "AJAY"],
  ["JAY", false, true, "AJAY", "KRUTIK", ["deep"]],
  ["JAY", 2003, "YASH", "KRUTIK", "AJAY", [["deep"]]],
  ["JAY", 2003, 7, "KRUTIK", "PRAKRUTIK", "AJAY", [[["deep"]]]],
  // change code above this line
];
// ---------------------------------------------------------------------------------------------------

//   ----------------------------------------------------------------------------------------------------
function sumAll(arr) {
  let start = Math.min(arr[0], arr[1]);
  let end = Math.max(arr[0], arr[1]);
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
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
  return collection.filter((obj) => {
    for (let i = 0; i < Keys.length; i++) {
      if (!obj.hasOwnProperty(Keys[i]) || obj[Keys[i]] !== source[Keys[i]]) {
        return false;
      }
    }
    return true;
  });
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);
//   ----------------------------------------------------------------------------------------------------
function spinalCase(str) {
  var regex = /\s+|_+/g;

  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  return str.replace(regex, "-").toLowerCase();
}

spinalCase("This Is Spinal Tap");
//   ----------------------------------------------------------------------------------------------------
function translatePigLatin(str) {
  let Regex = /^[^aeiou]+/;
  let Consonants = str.match(Regex);
  return Consonants !== null
    ? str.replace(Regex, "").concat(Consonants).concat("ay")
    : str.concat("way");
}

translatePigLatin("consonant");
//   ----------------------------------------------------------------------------------------------------
function myReplace(str, before, after) {
  // Find index where before is on string
  var index = str.indexOf(before);
  if (str[index] === str[index].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }

  str = str.replace(before, after);

  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
//   ----------------------------------------------------------------------------------------------------
function pairElement(str) {
  const match = function (char) {
    switch (char) {
      case "A":
        return ["A", "T"];
      case "T":
        return ["T", "A"];
      case "C":
        return ["C", "G"];
      case "G":
        return ["G", "C"];
    }
  };

  const pairs = [];
  for (let i = 0; i < str.length; i++) {
    pairs.push(match(str[i]));
  }

  return pairs;
}

pairElement("GCG");
//   ----------------------------------------------------------------------------------------------------
function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    const Code = str.charCodeAt(i);

    if (Code !== str.charCodeAt(0) + i) {
      return String.fromCharCode(Code - 1);
    }
  }
  return undefined;
}

fearNotLetter("abce");
//   ----------------------------------------------------------------------------------------------------
function uniteUnique(arr1, arr2, arr3) {
  const finalArray = [];

  for (let i = 0; i < arguments.length; i++) {
    const arrayArguments = arguments[i];

    for (let j = 0; j < arrayArguments.length; j++) {
      let indexValue = arrayArguments[j];

      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }

  return finalArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
//   ----------------------------------------------------------------------------------------------------
function convertHTML(str) {
  var temp = str.split("");

  for (var i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case "<":
        temp[i] = "&lt;";
        break;
      case "&":
        temp[i] = "&amp;";
        break;
      case ">":
        temp[i] = "&gt;";
        break;
      case '"':
        temp[i] = "&quot;";
        break;
      case "'":
        temp[i] = "&apos;";
        break;
    }
  }

  temp = temp.join("");
  return temp;
}

convertHTML("Dolce & Gabbana");
//   ----------------------------------------------------------------------------------------------------
function sumFibs(num) {
  let prev = 0;
  let current = 1;
  let result = 0;
  while (current <= num) {
    if (current % 2 !== 0) {
      result += current;
    }
    current += prev;
    prev = current - prev;
  }

  return result;
}

sumFibs(4);
//   ----------------------------------------------------------------------------------------------------
function sumPrimes(num) {
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) return false;
    }
    return true;
  }

  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) sum += i;
  }
  return sum;
}
//   ----------------------------------------------------------------------------------------------------
function smallestCommons(arr) {

  const [min, max] = arr.sort((a, b) => a - b);
  const numberDivisors = max - min + 1;

  let upperBound = 1;
  for (let i = min; i <= max; i++) {
    upperBound *= i;
  }

  for (let multiple = max; multiple <= upperBound; multiple += max) {

    let divisorCount = 0;
    for (let i = min; i <= max; i++) {

      if (multiple % i === 0) {
        divisorCount += 1;
      }
    }
    if (divisorCount === numberDivisors) {
      return multiple;
    }
  }
}

smallestCommons([1, 5]);
//   ----------------------------------------------------------------------------------------------------
function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});
//   ----------------------------------------------------------------------------------------------------
function steamrollArray(arr) {
  const flattenedArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenedArray.push(...steamrollArray(arr[i]));
    } else {
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
};

steamrollArray([1, [2], [3, [[4]]]]);
//   ----------------------------------------------------------------------------------------------------
function binaryAgent(str) {
  var biString = str.split(" ");
  var uniString = [];

  for (var i = 0; i < biString.length; i++) {
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }

  return uniString.join("");
}

binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);
//   ----------------------------------------------------------------------------------------------------
function truthCheck(collection, pre) {

  let counter = 0;

  for (let c in collection) {

    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
      counter++;
    }
  }

  return counter == collection.length;
}

truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot");
//   ----------------------------------------------------------------------------------------------------
function addTogether() {
  const [first, second] = arguments;
  if (typeof(first) !== "number")
    return undefined;
  if (arguments.length === 1)
    return (second) => addTogether(first, second);
  if (typeof(second) !== "number")
    return undefined;
  return first + second;
}
//   ----------------------------------------------------------------------------------------------------
const Person = function(firstAndLast) {
  let fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};

const bob = new Person("Bob Ross");
console.log(bob.getFullName());
//   ----------------------------------------------------------------------------------------------------
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const radius = 6367.4447;
  const a = 2 * Math.PI;
  const newArr = [];

  const orbitperiod = function(obj) {
    const c = Math.pow(radius + obj.avgAlt, 3);
    const b = Math.sqrt(c / GM);
    const orbPeriod = Math.round(a * b);
    
    return {name: obj.name, orbitalPeriod: orbPeriod};
  };

  for (let elem in arr) {
    newArr.push(orbitperiod(arr[elem]));
  }

  return newArr;
}

// test here
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
//   ----------------------------------------------------------------------------------------------------
function cleanString(str) {
  return str.replace(/[^a-z0-9]/gi, '').toLowerCase();
}

function palindrome(str) {
  let strr = cleanString(str);
  let s=0
  let e=(strr.length-1)
  while(s<e){
    if(strr[s] != strr[e]){
      return false;
      break;
    }
    s++;
    e--;
  }
  return true;
}

palindrome("eye");
//   ----------------------------------------------------------------------------------------------------
function convertToRoman(num) {
  let roman = '';
  let romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  for (let i in romanNumerals) {
    while (num >= romanNumerals[i]) {
      roman += i;
      num -= romanNumerals[i];
    }
  }
  return roman;
}

convertToRoman(36);
//   ----------------------------------------------------------------------------------------------------
function rot13(str) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const input = 'NOPQRSTUVWXYZABCDEFGHIJKLM';
  return str.replace(/[A-Z]/g, c => alphabet[input.indexOf(c)]);
}

console.log(rot13('SERR PBQR PNZC'));  // "FREE CODE CAMP"

rot13("SERR PBQR PNZC");
//   ----------------------------------------------------------------------------------------------------

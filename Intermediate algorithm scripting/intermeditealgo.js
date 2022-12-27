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

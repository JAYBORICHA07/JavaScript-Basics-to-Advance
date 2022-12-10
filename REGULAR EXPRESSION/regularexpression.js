// ----------------------------------------------------------------------------------------------------
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
// ----------------------------------------------------------------------------------------------------
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
// ----------------------------------------------------------------------------------------------------
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);
// ----------------------------------------------------------------------------------------------------
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result = fccRegex.test(myString);
// ----------------------------------------------------------------------------------------------------
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line
// ----------------------------------------------------------------------------------------------------
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);
// ----------------------------------------------------------------------------------------------------
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
// ----------------------------------------------------------------------------------------------------
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line
// ----------------------------------------------------------------------------------------------------
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line
// ----------------------------------------------------------------------------------------------------
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-9]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line
// ----------------------------------------------------------------------------------------------------
// Only change code below this line
let chewieRegex = /Aa*/g; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);
// ----------------------------------------------------------------------------------------------------
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);
// ----------------------------------------------------------------------------------------------------
let reCriminals = /C+/; // Change this line
// ----------------------------------------------------------------------------------------------------

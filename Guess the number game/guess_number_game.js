//generating the random whole number b/n 1 to 100
let num = Math.floor((Math.random() * 100) + 1);
let guess = prompt("Enter number between 1-100 : ")

let count = 1
//taking guess from user
while(true){

    //if the number is successfully guessed then user will get the score and code will terminated
  if(guess==num){
    console.log(`Bingo you guessed the right number and your score is ${100-count} `);
    break;
  }

  //if the number guessed by the user is greater then the actual number then it will execute the following code
  else if(guess>num){
    console.log(`The number is less then the ${guess} `)
    count++
    guess = prompt("Enter number between 1-100 : ")
  }

  //if the number guessed by the user is less then the actual number then it will execute the following code
  else if(guess<num){
    console.log(`The number is greater then the ${guess} `)
    count++
  guess = prompt("Enter number between 1-100 : ")
  }
  //here the count will track the number of guess user takes to guess the actual number and the score will 
//   be (100 - number of guess) so having higher score is more better.
}
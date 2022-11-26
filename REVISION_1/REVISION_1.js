// //Program for prime number : 
let num = prompt("Enter the number you wanna check for prime : ")
num = Number.parseInt(num)
if(num == 1 || num == 0){
  console.log("This is not a prime number")
}
else{
  let count=0;
for(let i = 2; i < (num/2); i++){
  if(num%i == 0){
    count++;
    break;
  }
}
if(count==0){
  console.log("This is a prime number.....")
}
else{
  console.log("This is not a prime number....")
}
}

//Program for reverse a number :
let num1 = prompt("Enter the number you wanna reverse : ")
num1 = Number.parseInt(num1)
let sum = 0, rem=0
while(num1>0){
  rem = num1 % 10
  sum = sum + (rem * 10)
  num1 = num1 / 10
}
console.log(sum)
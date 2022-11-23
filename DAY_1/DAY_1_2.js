// check if the age is between 10 and 20
let age = prompt("what is your age : ")
age = Number.parseInt(age)
if(age >= 10 && age <=20){
  console.log("YEs")
}
  
else{
  console.log("NO")
}
 //check if the number is devisiable by 2 and 3;
let num = prompt("enter the number : ")
  num = Number.parseInt(num)
if((num % 2 == 0) && (num % 3 ==0)){
  console.log("yes")
}
else{
  console.log("no")
}
//check if the number is devisiable by 2 or 3;
let numm = prompt("enter the number : ")
  numm = Number.parseInt(numm)
if((numm % 2 == 0) || (num % 3 ==0)){
  console.log("yes")
}
else{
  console.log("no")
}
  // print if you can drive or not with ternery operator
let numb = prompt("enter the number : ")
  numb = Number.parseInt(numb)
  let a = numb>18?"you can drive":"you can't"
console.log(a);
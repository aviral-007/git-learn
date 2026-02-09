let userName ={
   firstName:"aviral",
   isLoggedIn:true,
   "helo":" hiii"

}
/*
const userName ={
   firstName:"aviral",
   isLoggedIn:true,

} -> if we use const keyword a particular amount of memory space is reserved 
 but it doesn't mean that we cant change the 
 datatypes inside the userName(object) 
*/
userName.firstName="Mr aviral" /*firstName got updated even  if 
it is -> const userName instead of let userName*/
console.log(userName);
console.log(userName.firstName);
console.log(typeof(userName));
userName.lastName="vats"
console.log(userName.lastName)
console.log(userName['helo'])

let todayDate=new Date()
console.log(todayDate);
console.log(todayDate.getDate());
//array
let anotherUser=["aviral",true]
console.log(anotherUser[0])
console.log(anotherUser[1])
let isValue="2abc";
console.log(Number(isValue)) //-> Nan
console.log(typeof(Number(isValue))) //-> number
console.log(Number(undefined));
console.log(Number(null));


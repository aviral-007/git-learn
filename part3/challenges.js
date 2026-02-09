// checking if number is greater than another number
num1=4
num2=8

if(num1>num2){
    console.log("num1 is greater ");
    
}else{
    console.log("nope number 1 is not greater");
    
}

// checking if a string is equal to another string
userName="chai"
anotherUserName="chai"
if(userName==anotherUserName){
    console.log("SAME");
    
}else{
    console.log("not same");
    
}

//checking if variable is a number or not
let score="44"; // === to check type of variation
if(typeof(score)==='number'){
    console.log("is a number");
    
}else{
    console.log("not a number");
    
}

let array=[]
if(typeof(array)==="object"){
    console.log("yes array is object");
    
}else{
    console.log("no array is not an object");
    
}

//checking if a boolean is true or false

isTeaReady=false
if(isTeaReady){
    console.log("tea is ready");
    
}else{
    console.log("tea is not ready");
    
}

// checking if array is empty or not

let items=[1,2,3,4]
console.log(items.length);
if(items.length===0){
    console.log("array is empty");
    
}else{
    console.log(`array has ${items.length} elements `);
    
}

/*
The strict equality (===) operator checks whether its two operands 
are equal, returning a Boolean result. Unlike the equality operator,
 the strict equality operator always considers operands of different 
 types to be different.
 */
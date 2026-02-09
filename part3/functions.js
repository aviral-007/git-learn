function greet(name){ // name is placeholder called parameter
    console.log("aviral"+name);
    
}
greet("aviral") // aviral is argument
function makeTea(typeOfTea){
    return `making ${typeOfTea}`// function ends here
    console.log(test); // this line would never be reached
   
}
let teaOrders=makeTea("lemon tea")
console.log(teaOrders);
// javascript execution context
 
function orderTea(teaTypes){
    function confirmORDER(){
        return `order confirmed for chai`
    }
    return confirmORDER()
}

let orderConfirmation=orderTea("chai")
console.log(orderConfirmation);

function greet() {}
//const greet = () => {}  arrow function
const calculateTotal=(price,quantity)=>{
    return price*quantity
}
//const calculateTotal=(price,quantity) =>  price*quantity

let totalCost=calculateTotal(499,100)
console.log(totalCost);

function makeTeaforMe(typesofTea){
    return `make tea:${typesofTea}`;
}
function processTeaorder(teaFunction){
    return teaFunction("earl grey ")

}
let order = processTeaorder(makeTeaforMe);
console.log(order);

function createTeaMaker(nAMES){
    return function(teaTypess){
        return `making : ${teaTypess} ${nAMES}`;//inner function has access to outer parameter nAMES
    };
}
let teaMaker=createTeaMaker("AVIRAL")
let result=teaMaker("green tea")
console.log(result);

//number
let balance=120;
console.log(balance);
console.log(typeof(balance)); //->number
let anotherBalance= new Number(120)
console.log(anotherBalance);
console.log(anotherBalance.valueOf());
console.log(typeof(anotherBalance)) //->object

//boolean
let isActive= true
let isReallyActive=new Boolean(true)//not recommended

//null and undefined

let userName
console.log(userName); //->undefined

let userName2=null
console.log(userName2);//->null

// string

let myString="aviral"
let uderName='halo'
let newString=`hello ${myString} !`
console.log(newString);

//symbol
let sm1=Symbol();
let sm2=Symbol();
console.log(sm1==sm2); /* => false because but behind  the scene in
the memory js takes it as unique value*/
console.log(sm1);
let sm3=Symbol("aviral")
let sm4=Symbol("aviral")
console.log(sm3==sm4); /* -> false whole idea of 
symbol is uniqueness, it gaurantees uniqueness
it creates new symbol every single time*/











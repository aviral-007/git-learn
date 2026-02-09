 //  objects are instances of the classes

 let car = {
    make : "toyota", 
    model : "camry",
    year:2020,
    start: function (){
        return `${this.make} car got started in ${this.year}`
    }
 };
 console.log(car.start());

function Person(name,age){
    this.name=name
    this.age=age

}
let john = new Person("John",20)
console.log(john.name);

function Animal(type){
    this.type=type 
}

Animal.prototype.speak=function(){
    return `${this.type} makes a sound`
}

Array.prototype.hitesh=function(){
    return `Custom method ${this}`// this is refrence point who ever is calling me acccess this  
}

let myArray = [1,2,3,4]
console.log(myArray.hitesh());

let myNewArray = [1,2,3,4,5,6,7,8]
console.log(myNewArray.hitesh());

class Vehicle {
  // all the funcion declared inside the class we change terminology and call them methods
  constructor(make,model){
    this.make=make
    this.model=model
  }  
  // we are inside function we dont need to put function keyword

  start(){
     return `${this.model} is a car from ${this.make} ` ;
  }

  
}                              
// we can put comma and extend more classes
  class Car extends Vehicle{// extends allows us to acess everything that is there inside the above class   
    drive(){
        return `${this.make} : this is an inheritance example`;
    }

}

let myCar = new Car("toyota","corolla")
console.log(myCar.start());
console.log(myCar.drive());

let vehOne =new  Vehicle("toyota","corolla")
console.log(vehOne.make);
// encapsulation -> process to restricting direct acess to object data 


class bankAcoount {
    #balance = 0; // this variable will not be available to visit to anyone 
    deposit(amount){
      this.balance+=amount;
      return this.#balance;
    } 

    getBalance(){
        return `$ ${this.#balance}`;
    }

}

let account = new bankAcoount()
console.log(account.getBalance());

// abstraction
class CoffeMachine{
    start(){
        // call data base
        //filter value
        return `starting the machine ... `

    }
    brewCoffee(){
        // complex calculation
        return `brewing coffee`
    }
    pressStartButton(){
       let msgone= this.start()
       let msgtwo =  this.brewCoffee()
       return `${msgone}+ ${msgtwo}`
    }

}

let myMachine = new CoffeMachine()
console.log(myMachine.start());
console.log(myMachine.brewCoffee());
console.log(myMachine.pressStartButton());
// polymorphism
class Bird {
    fly(){
        return `flying....`
    }
}

class Penguin extends Bird {
    fly(){
        return `Penguins cant fly`
    }
}
let bird = new Bird ()
let penguin = new Penguin()
console.log(bird.fly());
console.log(penguin.fly());

// static method 
class Calculator {
     add(a,b){
        return a + b 
    } // static are speacial method which can be called by class itself
}
 
let miniCalc = new Calculator
console.log(miniCalc.add(2,3));
// getters and setters 
class Employee {
    #Salary;
    constructor (Name,Salary){
    if (Salary<0) {
        throw new Error("salary cannot be negetie");
        
    }
    this.Name=Name;
    this.#Salary=Salary;
}

   get Salary(){
    return `you are not alllowd to see salary`;
    
   }
   set Salary(value){
    if(value<0) {
       console.error("invalid salary");
        
    }else{
        this._Salary=value;
    }
   }

}
let emp = new Employee("alice",-50000)
console.log(emp._Salary);
emp.Salary=60000



 
 



// let teas = ["oolong tea","green tea","oolong tea","chai"]

const { forwardRef } = require("react");

// let otherTeas=[];

// for (let i = 0 ; i < teas.length ; i++) {
//     if(teas[i]==="chai"){
//         break;
//     }

//     otherTeas.push(teas[i])
    
    
    

// }

// console.log(otherTeas);


let city = ["paris","london","france","italy",""]

let removeParis=[];

for (let j = 0 ; j < city.length ; j++) {
    if(city[j]==="paris"){
        continue;
    }
    removeParis.push(city[j])
}

   console.log(removeParis);

// for of loop
let numbers=[1,2,3,4]
let newNumber=[]
for (const num of numbers) {
    if(num==4){
        break;
    }
    newNumber.push(num)
    
}
console.log(newNumber);

let teaTypes=["chai","herbal","green","oolong"]
let prefferedTea=[]
for (const tea of teaTypes) {
    if(tea==="oolong"){
        continue;
    }
    prefferedTea.push(tea)
}
console.log(prefferedTea);

let citiesPopulation={
    london:8900,
    berlin:3500,
    newYork:8400,
    paris:2200


};
let cityPopulations={

}
//console.log(Object.values(citiesPopulation));
for (const city  in citiesPopulation) {
   
 //   console.log(citiesPopulation.city); //undefined
//  console.log(citiesPopulation[city]); 
if(city==="berlin"){
    break;
}
cityPopulations[city]=citiesPopulation[city];
    
    
    
}
console.log(cityPopulations);

let worldCities={
    sydney:5000000,
    tokto:9000000,
    berlin:35000000,
    paris:22000000


}
let largeCities={

}
for (const city in worldCities) {
    if (worldCities[city]<3000000){ 
        continue1   ;
    }

    largeCities[city]=worldCities[city]
    
    
}
console.log(largeCities)

//forEach loop
let teaCollection=["earl grey","green tea","chai","oolong tea"];
let availableTeas=[]
teaCollection.forEach(function(tea){
    if(tea==='chai'){
       // break; - gives error because we are in function yes we are in loop but inside loop in a function in another scope
       // yes we are in loop but in loop we are in anothwr scope function scope
       //break and continue keyword are meant for loops
       return ;
    }
    availableTeas.push(tea);

});
console.log(availableTeas);
let travelCities=["berlin","paris","newyork","sydney","america"]
let myCities=[]

travelCities.forEach(function (city){
    if(city==='sydney'){
        return
    }
    myCities.push(city)
});
console.log(myCities);

let array=[2,5,7,9]
let doubleNumbers=[]  
let multipliedNumbers=[]
for (let i = 0 ; i<array.length; i++) {
    if(array[i]===7){
        continue;
    }
    doubleNumbers.push(array[i]*2)
     
    
    
}

console.log(doubleNumbers);
let teas=["chai","green tea","black tea","jasmine tea"," herbal tea"]
let shortTeas=[ ]
for (const tea of shortTeas) {
    if (tea.length>10) {
        break;
    }
    shortTeas.push(tea)
}
console.log(shortTeas);


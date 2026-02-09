// protoype->extra properties and functionality in any data type
let computer={cpu:12}
let lenovo={screen:"HD",
    __proto__:computer
}
let tomHardware={}
console.log(`lenovo`,lenovo.__proto__); // __ is called dunder
let genericCar={tyres:4}
let tesla = {
    driver:"AI"
}

Object.setPrototypeOf(tesla,genericCar)
//console.log(`tesla`,tesla.tyres) 
console.log(`tesla`,Object.getPrototypeOf(tesla))


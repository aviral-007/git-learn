let teaFlavours=["green tea","black tea","oolong tea"]
let firstTea=teaFlavours[0]
console.log(firstTea);
let teaFl=new Array("H","I")
let oldCities=["mumbai","singapore"]
// oldCities[2]="DELHI" can be used to add value


//oldCities[oldCities.length]="delhi"
oldCities.push("delhi") // to add any element at last index of any array
console.log(oldCities);

let tea=["green tea","black tea"]
tea.pop() // stringname.pop() method removes last value of any array
console.log(tea); 

let topCities=["berlin","singapore","new york"]
let hardCopy=[...topCities] // -> creates hard copy of a string 
hardCopy.pop()
console.log(hardCopy);
console.log(topCities);
/*
let hardCopy=topCities.slice() -> another method to create hardcopy
*/

let europeanCities=["berlin","france"]
let asianCities=["tokyo","bangkok"]
//let newArray=[europeanCities,asianCities]
//let addedArray=europeanCities+asianCities
let catArray=europeanCities.concat(asianCities)
console.log(catArray);

let teaMenu=["green tea","masala chai"]
let menuLength=teaMenu.length
console.log(menuLength);

let cityBucketList=["bazpur","kashipur","rudrapur","haldwani"]
let isBazpurinList=cityBucketList.includes("bazpur")
console.log(isBazpurinList);



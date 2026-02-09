// example 1
document.getElementById("changeTextButton").addEventListener('click', function () {
    console.log(this); // when we use arrow function the context is always pointing towards the global "this" 
    // when we use function then it points to current context who is calling it 
    let paragraph = document.getElementById("myParagraph");
    console.log(paragraph);
    paragraph.textContent="the paragraph is changed"
    
})
////events in js  


// example 2 
document.getElementById("highlightFirstCity").addEventListener(('click'),function(){
let cities_list = document.getElementById("citiesList")
cities_list.firstElementChild.classList.add("highlight")



})
//html markup langauge
// dom processed element in document tree in memory

//example 3
document.getElementById("changeOrder").addEventListener('click',function () {
    let coffeeType=document.getElementById("coffeeType");
    coffeeType.textContent="nimbu pani"
    coffeeType.style.padding="5px"
    coffeeType.style.backgroundColor="red"
    
})

//example 4
document.getElementById("addNewItem").addEventListener('click',function() {
    let newItem= document.createElement("li")
    newItem.textContent="palak wala saag "
    document.getElementById("shoppingList").appendChild(newItem)
})

//example 5
document.getElementById("removeLastTask").addEventListener('click',function(){
    let tasklist = document.getElementById("taskList")
   // tasklist.remove() - > remove all the elements 
   // if we want to remove one 
   tasklist.lastElementChild.remove()


})

//example 6 

/*document.getElementById("clickMeButton").addEventListener("mouseover",function(){
    alert("hello")
})
*/
document.getElementById("clickMeButton").addEventListener("dblclick",function(){
    alert("hello")
})

// example 7 
document.getElementById("teaList").addEventListener('click',function(event){
    
    if(event.target && event.target.matches(".teaItem")){
        alert("hello chai pilo dosto"+ event.target.textContent)
    }
    
})

// example 8 
document.getElementById("feedbackForm").addEventListener('submit',function(event){
    event.preventDefault()
    let feedback = document.getElementById("feedbackInput").value 
    console.log(feedback);
    document.getElementById("feedbackDisplay").textContent=` feedback is ${feedback}`
    

})

// example 9 
document.addEventListener('DOMContentLoaded',function () {
  document.getElementById ('domStatus').textContent="dom fully loaded"
})

// example 10

document.getElementById("toggleHighlight").addEventListener('click',function(){
    let decriptionText= document.getElementById("descriptionText")
    decriptionText.classList.toggle("highlight")
})



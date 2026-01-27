function fetchData(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let success= true;
            if (success){
                resolve("data fetched successfully")
            }else{
                reject("error")
            }
        }, 3000);
    })
    
}

let response = fetchData()
console.log(response);
fetchData()
.then((data)=>console.log(data))

.catch((error)=>console.log(error));
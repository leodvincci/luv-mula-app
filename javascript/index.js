const billsLi = document.querySelector("#li-bills");
const billsContainer = document.querySelector("#bills-container")


billsLi.addEventListener("click", ()=>{
    if(billsContainer.classList.contains("hidden")){
        billsContainer.classList.remove("hidden");
        console.log("I UNDID IT")
    }else{
        billsContainer.classList.add("hidden");
        console.log("I HIDE IT")

    }
} )
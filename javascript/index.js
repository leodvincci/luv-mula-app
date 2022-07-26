const billsLi = document.querySelector("#li-bills");
const billsContainer = document.querySelector("#bills-container")

const billModal = document.querySelector("#add-bill-modal");
const billBtn = document.querySelector("#add-bill-btn");
const body = document.querySelector("body");
const billList = document.querySelector("#bill-list")
const billData = ()=>fetch("./json/bills.json")
    .then( x => {return x.json()})





billsLi.addEventListener("click", ()=>{
    if(billsContainer.classList.contains("hidden")){
        billsContainer.classList.remove("hidden");
        console.log("I UNDID IT")
    }else{
        billsContainer.classList.add("hidden");
        console.log("I HIDE IT")

    }
} )





billBtn.addEventListener("click", ()=>{
        billModal.classList.remove("hidden");
        console.log("I HIDE IT")

} )

window.addEventListener("keydown",(evt)=>{
            if(evt.key ==="Escape"){
                billModal.classList.add("hidden");
                console.log("I HIDE IT")
            }



} )


billData().then(x =>
{
    for(let i =0; i < x.length; i++){
        const newDiv = document.createElement("div")
        newDiv.classList.add("myBill")
        newDiv.id = `b${x[i].id}`


        billList.append(newDiv)

        const newP = document.createElement("p")
        newP.id = `biller-${x[i]}`
        newP.textContent = x[i].payee
        newDiv.append(newP)

        const newP2 = document.createElement("p")
        newP2.id = `bill-amount-${x[i]}`
        newP2.textContent = `$${x[i].amount}`
        newDiv.append(newP2)

        const newBtn = document.createElement("button");
        newBtn.classList.add(`bill-btn`)
        newBtn.classList.add(x[i].status)
        newBtn.id = `bill-status-${x[i].id}`
        newBtn.textContent = x[i].status;
        newDiv.append(newBtn)

    }
})

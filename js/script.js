const pendingListItemHolder = document.querySelector("#pendingListItemHolder");
const completedListItemHolder = document.querySelector("#completedListItemHolder");
const addNewItemBtn = document.querySelector("#addNewItemBtn");
const newItemText = document.querySelector("#newItemText");
const checkedBox = document.querySelector("#checkedBox");
const deleteIcon = document.querySelector("#deleteIcon");

const statusDone = document.querySelector("#statusDone");
const statusPending = document.querySelector("#statusPending");

const pendingItemArray = [];

addNewItemBtn.addEventListener("click",addItem)

function addItem(){
    let pendingItem = newItemText.value.trim();
    if(!pendingItem){
        return alert("You must input your task")
    }
    pendingItemArray.push(pendingItem)
    displayUpdate()
    newItemText.value = "";
    console.log(pendingItemArray);
}

function displayUpdate() {
    pendingListItemHolder.innerHTML = "";
    pendingItemArray.map((item,index)=>{
        pendingListItemHolder.innerHTML += `<li class="statusPending">${item} <button class="pendingDeleteBtn">Delete</button></li>`
    })

    const pendingDeleteBtn = document.querySelectorAll(".pendingDeleteBtn");
    const pendingDeleteBtnArray = Array.from(pendingDeleteBtn)
    pendingDeleteBtnArray.map((item,index)=>{
        item.addEventListener("click",()=>{
            console.log(pendingItemArray);
            pendingItemArray.splice(index,1)
            displayUpdate()            
        })
    })
}
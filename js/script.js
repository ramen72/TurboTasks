// const pendingListItemHolder = document.querySelector("#pendingListItemHolder");
// const completedListItemHolder = document.querySelector("#completedListItemHolder");
// const addNewItemBtn = document.querySelector("#addNewItemBtn");
// const updateItemBtn = document.querySelector("#updateItemBtn");
// const newItemText = document.querySelector("#newItemText");
// const checkedBox = document.querySelector("#checkedBox");
// const deleteIcon = document.querySelector("#deleteIcon");

// const statusDone = document.querySelector("#statusDone");
// const statusPending = document.querySelector("#statusPending");

// const pendingItemArray = [];
// let updateIndex = null;

// addNewItemBtn.addEventListener("click",addItem)

// function addItem(){
//     let pendingItem = newItemText.value.trim();
//     if(!pendingItem){
//         return alert("You must input your task")
//     }
//     pendingItemArray.push(pendingItem)
//     displayUpdate()
//     newItemText.value = "";
//     console.log(pendingItemArray);
// }

// function displayUpdate() {
//     pendingListItemHolder.innerHTML = "";
//     pendingItemArray.map((item,index)=>{
//         pendingListItemHolder.innerHTML += `<li class="statusPending">${item} <button class="editBtn">Edit</button><button class="pendingDeleteBtn">Delete</button></li>`
//     })

//     const pendingDeleteBtn = document.querySelectorAll(".pendingDeleteBtn");
//     const pendingDeleteBtnArray = Array.from(pendingDeleteBtn)

//     const editBtn = document.querySelectorAll(".editBtn");
//     const editBtnArray = Array.from(editBtn)
    
//     pendingDeleteBtnArray.map((item,index)=>{
//         item.addEventListener("click",()=>{
//             console.log(pendingItemArray);
//             pendingItemArray.splice(index,1)
//             displayUpdate()            
//         })
//     })
//     editBtnArray.map((item,index)=>{
//         item.addEventListener("click",()=>{
//             console.log("Edit");
//             newItemText.value = pendingItemArray[index]
//             addNewItemBtn.style.display = "none"
//             updateItemBtn.style.display = "inline-block"
//             updateIndex = index;
//         })
//     })
// }

// updateItemBtn.addEventListener("click",()=>{
//     pendingItemArray[updateIndex] = newItemText.value.trim();
//     console.log(pendingItemArray[updateIndex]);
//     displayUpdate();
//     newItemText.value = "";
//     addNewItemBtn.style.display = "inline-block"
//     updateItemBtn.style.display = "none"
// })




// DOM Elements
const pendingListItemHolder = document.querySelector("#pendingListItemHolder");
const completedListItemHolder = document.querySelector("#completedListItemHolder");
const addNewItemBtn = document.querySelector("#addNewItemBtn");
const updateItemBtn = document.querySelector("#updateItemBtn");
const newItemText = document.querySelector("#newItemText");

// State Variables
const pendingItemArray = [];
let updateIndex = null;

// Event Listeners
addNewItemBtn.addEventListener("click", addItem);
updateItemBtn.addEventListener("click", updateItem);

// Function to add a new item
function addItem() {
    const pendingItem = newItemText.value.trim();
    if (!pendingItem) {
        alert("You must input your task");
        return;
    }

    pendingItemArray.push(pendingItem);
    updateDisplay();
    resetInputField();
    console.log(pendingItemArray);
}

// Function to update the display of pending items
function updateDisplay() {
    pendingListItemHolder.innerHTML = "";

    pendingItemArray.forEach((item, index) => {
        pendingListItemHolder.innerHTML += `
            <li class="statusPending">
                ${item} 
                <button class="editBtn">Edit</button>
                <button class="pendingDeleteBtn">Delete</button>
            </li>`;
    });

    addDeleteEventListeners();
    addEditEventListeners();
}

// Function to handle item updates
function updateItem() {
    const updatedText = newItemText.value.trim();

    if (updatedText) {
        pendingItemArray[updateIndex] = updatedText;
        updateDisplay();
        resetInputField();
        toggleAddUpdateButtons(true);
        console.log(pendingItemArray);
    } else {
        alert("You must input your task");
    }
}

// Function to reset the input field
function resetInputField() {
    newItemText.value = "";
}

// Function to toggle between Add and Update buttons
function toggleAddUpdateButtons(showAddButton) {
    addNewItemBtn.style.display = showAddButton ? "inline-block" : "none";
    updateItemBtn.style.display = showAddButton ? "none" : "inline-block";
}

// Add event listeners for delete buttons
function addDeleteEventListeners() {
    const deleteButtons = document.querySelectorAll(".pendingDeleteBtn");

    deleteButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            pendingItemArray.splice(index, 1);
            updateDisplay();
        });
    });
}

// Add event listeners for edit buttons
function addEditEventListeners() {
    const editButtons = document.querySelectorAll(".editBtn");

    editButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            newItemText.value = pendingItemArray[index];
            toggleAddUpdateButtons(false);
            updateIndex = index;
        });
    });
}

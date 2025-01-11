const pendingListItemHolder = document.querySelector("#pendingListItemHolder");
const completedListItemHolder = document.querySelector("#completedListItemHolder");
const addNewItemBtn = document.querySelector("#addNewItemBtn");
const newItemText = document.querySelector("#newItemText");
const checkedBox = document.querySelector("#checkedBox");
const deleteIcon = document.querySelector("#deleteIcon");

const statusDone = document.querySelector("#statusDone");
const statusPending = document.querySelector("#statusPending");

const pendingListArray = ["This is the first Item", "b","c"]

addNewItemBtn.addEventListener("click",()=>{
    pendingListArray.push(newItemText.value)
    renderUI()
    console.log(pendingListArray);
    
})
function renderUI(){
    pendingListItemHolder.innerHTML = "";
    pendingListArray.map((item,index)=>{
        pendingListItemHolder.innerHTML += `<li class="statusPending">
                            <div class="d-flex justify-content-between align-items-center"><div>${index + 1}
                               <span>${item}</span></div>
                                <div class="d-flex justify-content-end align-items-center column-gap-4">
                                    <button type="button" id="editBtn">Edit</button>
                                    <button type="button" id="doneBtn">Done</button>
                                    <i class="fa-solid fa-trash-can"></i>
                                </div>
                            </div>
                        </li>`
    })
}

pendingListItemHolder.addEventListener("click",(event)=>{
    console.log(event.target.parentElement.parentElement.span);
    
    // console.log((event.target.parentElement).parentElement.textContent);
    
})




















window.addEventListener("load",renderUI)
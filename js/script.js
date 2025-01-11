let inputBox = document.querySelector("#inputBox")
let addBtn = document.querySelector("#addBtn")
let upBtn = document.querySelector("#upBtn")
let taskItems = document.querySelector("#taskItems")
let trashItems = document.querySelector(".trash")

let taskList = []
let trashList = []
// let templateArr = `<li>1. ${taskList} <span> <i class="fa-regular fa-pen-to-square"></i> <i class="fa-light fa-trash"></i></span></li>`

let upIndexNum;

upBtn.addEventListener("click", () => {
    taskList[upIndexNum] = inputBox.value
    displayFunc()
    upBtn.style.display = "none"
    addBtn.style.display = "inline-block"
})


addBtn.addEventListener("click", () => {
    // taskList.push( `<li>1. ${inputBox.value} <span> <i class="fa-regular fa-pen-to-square"></i> <i class="fa-light fa-trash"></i></span></li>`)
    taskList.push(inputBox.value)
    displayFunc()

})



function displayFunc() {
    inputBox.value = ""
    taskItems.innerHTML = ""

    taskList.map((item, index) => {
        taskItems.innerHTML += `<li>${index + 1}. ${item} <span> <i class="fa-regular fa-pen-to-square editBtn"></i> <i class="fa-light fa-trash moveTrashBtn"></i></span></li>`
    })

    trashList.map((item, index)=>{
        trashItems.innerHTML += `<li>${index + 1}. ${item} <span> <i class="fa-solid fa-rotate-right undoBtn"></i> <i class="fa-solid fa-trash delBtn"></i></span></li>`
    })


    
    let editBtn = document.querySelectorAll(".editBtn")
    let editBtnArr = Array.from(editBtn)
    
    
    editBtnArr.map((item, index) => {
        item.addEventListener("click", () => {
            inputBox.value = taskList[index]
            upBtn.style.display = "inline-block"
            addBtn.style.display = "none"
            upIndexNum = index
        })
    })
    
    let moveTrashBtn = document.querySelectorAll(".moveTrashBtn")
    let moveTrashBtnArr = Array.from(moveTrashBtn)
    
    moveTrashBtnArr.map((item, index)=>{
        item.addEventListener("click",()=>{
            trashList.push(taskList[index])
            taskList.splice(index, 1)
            displayFunc()
        })
    })
    
    let undoBtn = document.querySelectorAll(".undoBtn")
    let undoBtnArr = Array.from(undoBtn)


    let delBtn = document.querySelectorAll(".delBtn")
    let delBtnArr = Array.from(delBtn)

    delBtnArr.map((item, index)=>{
        item.addEventListener("click", ()=>{
            trashList.splice(index, 1)
            displayFunc()
        })
    })
    
}
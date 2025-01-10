let inputBox = document.querySelector("#inputBox")
let addBtn = document.querySelector("#addBtn")
let upBtn = document.querySelector("#upBtn")
let taskItems = document.querySelector("#taskItems")
let trashItems = document.querySelector(".trash")

let taskList = []
// let templateArr = `<li>1. ${taskList} <span> <i class="fa-regular fa-pen-to-square"></i> <i class="fa-light fa-trash"></i></span></li>`

let indexNum;

upBtn.addEventListener("click", () => {
    taskList[indexNum] = inputBox.value
    console.log(taskList)
    displayFunc()
    addBtn.style.display = "inline-block"
    upBtn.style.display = "none"
})


addBtn.addEventListener("click", () => {
    // taskList.push( `<li>1. ${inputBox.value} <span> <i class="fa-regular fa-pen-to-square"></i> <i class="fa-light fa-trash"></i></span></li>`)
    taskList.push(inputBox.value)
    displayFunc()



    let editBtn = document.querySelectorAll(".editBtn")
    let moveTrashBtn = document.querySelectorAll(".moveTrashBtn")

    let editBtnArr = Array.from(editBtn)
    let moveTrashBtnArr = Array.from(moveTrashBtn)

    editBtnArr.map((item, index) => {
        item.addEventListener("click", () => {
            inputBox.value = taskList[index]
            upBtn.style.display = "inline-block"
            addBtn.style.display = "none"
            indexNum = index
        })

    })


})

function displayFunc() {
    inputBox.value = ""
    taskItems.innerHTML = ""
    taskList.map((item, index) => {
        taskItems.innerHTML += `<li>${index + 1}. ${item} <span> <i class="fa-regular fa-pen-to-square editBtn"></i> <i class="fa-light fa-trash moveTrashBtn"></i></span></li>`
    })
    
}
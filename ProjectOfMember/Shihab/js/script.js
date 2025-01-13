let input = document.querySelector('.input')
let remove = document.querySelector('.remove')
let addBtn = document.querySelector('.addBtn')
let undateBtn = document.querySelector('.undateBtn')
let pen_box = document.querySelector('.pending-items')
let com_box = document.querySelector('.complete-items')
let pen_storage = []
let com_storage = []
let update_index;

    remove.addEventListener('click',()=> {
            input.value = ""
    })

    addBtn.addEventListener("click",()=>{
            if (input.value) {   
                let item = input.value
                pen_storage.push(item)
                myFunc()
                input.value = ""
            }      
         })

    function myFunc(){

        pen_box.innerHTML = ""
        pen_storage.map((item)=>{
            pen_box.innerHTML += ` 
                <div class="item">
                <span class="text-content">${item}</span>
                <div class="icon-box">
                    <i class="fa-regular fa-circle-check active custom-icon"></i>
                    <i class="fa-solid fa-pen-to-square update custom-icon"></i>
                    <i class="fa-regular fa-trash del custom-icon"></i>
                </div>
                </div>
            `
        })

    let del = document.querySelectorAll('.del')
    let delArry = Array.from(del)
        
    delArry.map((item,index)=>{

        item.addEventListener('click',()=>{
            pen_storage.splice(index,1)
            myFunc()
        })
    })

    let update = document.querySelectorAll('.update')
    let updateArry = Array.from(update)

    updateArry.map((item,index)=>{

        item.addEventListener('click',()=>{
            update_index = index
            input.value = pen_storage[index]
            addBtn.style.display = "none"
            undateBtn.style.display = "inline-block"
        })
    })

    let active = document.querySelectorAll('.active')
    let activeArry = Array.from(active)
        
        activeArry.map((item,index)=>{
            item.addEventListener('click',()=>{ 
                com_storage.push(pen_storage[index])
                pen_storage.splice(index,1) 
                complete()  
                myFunc()     
            })                
        })
        
    }

    function complete(){

        com_box.innerHTML = ""
        com_storage.map((item)=>[
        com_box.innerHTML += `         
            <div class="item">
            <span class="text-content">${item}</span>
            <div class="icon-box">
              <i class="fa-solid fa-rotate-left reverse custom-icon"></i>
              <i class="fa-regular fa-trash delet custom-icon"></i>
            </div>
            </div>
            `   
         ])

    let delet = document.querySelectorAll('.delet')
    let deletArry = Array.from(delet)
    
    deletArry.map((item,index)=>{
        item.addEventListener('click',()=>{
            com_storage.splice(index,1)
            complete()
        }) 
    })

    let reverse = document.querySelectorAll('.reverse')
    let revArry = Array.from(reverse)

    revArry.forEach((item,index)=>{
        item.addEventListener('click',()=>{
            pen_storage.push(com_storage[index])
            com_storage.splice(index,1)
            complete()
            myFunc()
        })
    })
    }

    undateBtn.addEventListener('click',()=>{
        console.log(update_index);
        pen_storage[update_index] = input.value
        myFunc()
        addBtn.style.display = "inline-block"
        undateBtn.style.display = "none"
        input.value = ""
    })
    


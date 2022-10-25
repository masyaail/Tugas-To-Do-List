let input = document.querySelector('.entered-list')
let addButton = document.querySelector('.add-list')
let tasks = document.querySelector('.container')


//add buttons

input.addEventListener ('keyup', () =>{
    if(input.value.trim() != 0){
        addButton.classList.remove('disabled')
    }else{
        addButton.classList.add('disabled')
    }
})

//add new tasks

addButton.addEventListener ('click', () =>{
   if(input.value != 0){
    let newItem = document.createElement('div');
    newItem.classList.add('task');
    newItem.innerHTML = `
    <div>
    <p>${input.value}</p>
    </div>
        <div class="button">
            <i class="fa-regular fa-pen-to-square"></i>
            <i class="fa-solid fa-xmark"></i>
        </div>`
    tasks.appendChild(newItem);
    input.value='';
   }else{
    alert('pleases enter')
   }

})

//delete 

tasks.addEventListener('click', (e) =>{
    if(e.target.classList.contains('fa-xmark')){
        e.target.parentElement.parentElement.remove();
    }
})

tasks.addEventListener('click', (e) =>{
    if (e.target.classList.contains('fa-pen-to-square')){
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
})
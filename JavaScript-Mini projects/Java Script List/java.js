
function  addlist(){

let taskname =document.getElementById('taskname').value

let tododiv=document.getElementById('mylist')

let newitem=document.createElement('div')

let todoname= document.createElement('li')
todoname.innerHTML=taskname
let deletebtn=document.createElement('i')
deletebtn.classList.add('far')
deletebtn.classList.add('fa-trash-alt')
if(!taskname){
document.getElementById('taskname').classList.add('error')
}
else{
document.getElementById('inputname').classList.remove('error')  
newitem.appendChild(todoname)
newitem.appendChild(deletebtn)
tododiv.appendChild(newitem)

document.getElementById('inputname').value=''
}
}
let tododiv=document.getElementById('mylist')
tododiv.addEventListener('click',deleteitem)

function deleteitem(e){

const element=e.target
if(element.classList[1]=='fa-trash-alt')
{
    element.parentElement.remove()
}
}
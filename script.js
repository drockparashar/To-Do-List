const val=document.getElementById("input-el")
const listEl=document.getElementById("list-el")
const addBtn=document.getElementById("add")
let audioElement= new Audio("chime.wav")
let tasks=[]

addBtn.addEventListener("click",()=>
{
    if(val.value!="")
    {
        tasks.push(val.value)
        addTask()
        val.value=""
    }
})

function addTask()
{
    let s=""
    for(let i=0;i<tasks.length;i++)
    {
        s+=`<li>${tasks[i]}<span id="cross"><img src="cross.png" id="check"></span></li>`
    }
    listEl.innerHTML=s
}

listEl.addEventListener("click",(e)=>
{
    console.log(e)
    if(e.target.tagName=="LI")
    {
        console.log("HELLO")
        e.target.classList.toggle("checked");
        audioElement.play()
    }
    else if(e.target.id=="checked")
    {
        console.log("HII")
        e.target.parentElement.remove();
    }
});




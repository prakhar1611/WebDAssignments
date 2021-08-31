const add=document.getElementById('#add');
const list=document.getElementById('#ul');

add.addEventListener('click',(event)=>{
event.preventDefault();
let listItem = document.getElementById('#inpuut').value;
 
let li = document.createElement("li");
li.textContent=listItem;

list.append(li);

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
})

//close button not working
var close = document.getElementsByClassName("close");

for(let i=0;i<close.length;i++)
{
    close[i].onclick=function(){
        const list=document.getElementById('#ul');
        let item= document.getElementsByName('li');
        item[i].style.display = "none";
    }
}


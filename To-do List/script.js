var list = document.querySelector("#todo-list");
list.addEventListener("click",function(e){
  if(e.target.className =="del-btn"){
    const li = e.target.parentElement;
    list.removeChild(li);
  }
}
)

var form = document.forms[0];


form.addEventListener("submit",function(e){
  e.preventDefault();
  
  const value = form.querySelector('input[type ="text"]').value;

  const li = document.createElement('li');
  const name = document.createElement('name');
  const del = document.createElement('delete');
 
  list.appendChild(li);
  li.appendChild(name);
  li.appendChild(del);
  
  name.textContent = value;
  del.textContent = "delete";
  
  name.classList.add("name");
  del.classList.add("del-btn");
  
  })
  

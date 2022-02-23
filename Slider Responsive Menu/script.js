const button = document.getElementById("toggle-bar");
const menu = document.querySelector(".mob-menu");

button.addEventListener("click",()=>{
 if(menu.style.transform != "none"){
  menu.style.transform = "none";
 } 
else{
  menu.style.transform = "translateY(-150%)";
}
})
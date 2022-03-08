const dice = document.querySelector(".dice-box");

function showAdvice(){
fetch("https://api.adviceslip.com/advice")
.then(res=>res.json())
.then(data =>{
 const advice = document.getElementById("advice-text");
 const index = document.getElementById("advice-no")
 advice.textContent=data.slip.advice;
 index.textContent = `ADVICE ${data.slip.id}`
})
}


dice.addEventListener("click",showAdvice)
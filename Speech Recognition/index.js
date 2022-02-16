const recognition = new webkitSpeechRecognition();    //a 'recognition' named object is created
recognition.interimResults = true;    //It shows the current ongoing recognition result on screen(not just the final result)

let para = document.createElement("p");
let words =  document.querySelector(".main");
words.appendChild(para);


//an event listener is attached to an event(i.e 'result' just like click result is an event in Web Speech Api which)
/*The result event of the Web Speech API is fired when the speech recognition service returns a result
— a word or phrase has been positively recognized and this has been communicated back to the app*/

recognition.addEventListener('result',e=>{
    const transcript = e.results[0][0].transcript;
   //console.log(e) to see whats happening in console and what its returning
    para.textContent = transcript;
    
        //this step will add a new para when the previous para finished.
        if(e.results[0].isFinal){
            para = document.createElement("p");
            words.appendChild(para);
        }
});

recognition.addEventListener('end',recognition.start) //this step will continue running the recognition service when u restart speaking.
recognition.start();  //this method will start the recognition service initially.



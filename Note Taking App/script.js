const button = document.querySelector(".save--note")
var notes = document.querySelector(".saved--notes")

function addNotes(e){
    e.preventDefault()
    
    const title = document.querySelector(".input--title").value
    const content = document.querySelector(".input--content").value
    if(content !== "" && title !== ""){

    const notes = document.querySelector(".saved--notes")
    const note = document.querySelector(".note")
    
    const newNote = document.createElement("div")
    const noteTitle = document.createElement("h3")
    const noteContent = document.createElement("p")
    const deleteBtn = document.createElement("button")

    notes.appendChild(newNote)
    newNote.appendChild(noteTitle)
    newNote.appendChild(noteContent)
    newNote.appendChild(deleteBtn)

    noteTitle.textContent = title
    noteContent.textContent = content
    deleteBtn.textContent = "DELETE"
    
    newNote.classList.add("note")
    deleteBtn.classList.add("delete")
    noteTitle.classList.add("note--title")
    noteContent.classList.add("note--content")

    }

    else{
        alert("Title or Note is missing")
    }

}




button.addEventListener("click",addNotes)

notes.addEventListener("click",(e)=> {
    e.preventDefault()
    if(e.target.className ==="delete"){
    const deleteNote =  e.target.parentElement
    notes.removeChild(deleteNote)
    
    }
    }
)


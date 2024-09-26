const newNoteBtn = document.querySelector('#new-note-btn')
const noteForm = document.querySelector('#note-form')
const addBtn = document.querySelector('#add-btn')
const testAreaNote = document.querySelector("#textarea-note")
const ul = document.querySelector("#notes-ul")
const notesContainer = document.querySelector(".notes-container")



newNoteBtn.addEventListener('click', () => {
    noteForm.style.display = "block"    
})

noteForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const textNote = testAreaNote.value
    
    testAreaNote.value = ""
    console.log(textNote)
    noteForm.style.display = "none"


    const li = document.createElement('li')
        li.innerHTML = textNote
        ul.appendChild(li)

    notesContainer.style.display = "block"
    

})

import {storageService} from '../../../services/async-storage.service.js';
import {utilService} from '../../../services/util.service.js';

export const noteService={
    query,
    togglePin,
    addNote,
    removeNote,
}
const NOTES_KEY = 'notesDB'

const notes = [ 
    { 
        id: "n101", 
        type: "note-txt", 
        isPinned: true, 
        info: { txt: "Fullstack Me Baby!" },
        style: { backgroundColor: "#FF5733" } 
    }, 
    { 
        id: "n102", 
        type: "note-img",
        isPinned: false, 
        info: { 
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw0gWlEimLsPylCKAm95y1K27fCdzXEHGhXYTfEWXo&s", 
            title: "Bobi and Me" 
        }, 
        style: { backgroundColor: "#00d" } 
    }, 
    { 
        id: "n103", 
        type: "note-todos", 
        isPinned: false,
        info: { 
            label: "Get my stuff together", 
            todos: [ 
                { txt: "Driving liscence", doneAt: null }, 
                { txt: "Coding power", doneAt: 187111111}
                ]
            },
        style: { backgroundColor: "#FFFFFF" } 
    } 
] 

function query(){ 
    return storageService.query(NOTES_KEY)
        .then(note => {
            if(!note || !note.length){
                note = notes
                _save(NOTES_KEY,note)
            }
            return note
        })
}

function togglePin(noteId){
    return storageService.query(NOTES_KEY)
        .then(dataNotes=>{
            const idx = dataNotes.findIndex(note => note.id === noteId)
            if(dataNotes[idx].isPinned) dataNotes[idx].isPinned = false
            else dataNotes[idx].isPinned = true
            return storageService.put(NOTES_KEY,dataNotes[idx])
        })
}

function addNote(noteInfo){
    const note = _createTxtNote(noteInfo)
    return storageService.post(NOTES_KEY,note)
}

function removeNote(id){
    return storageService.remove(NOTES_KEY,id)
}

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _createTxtNote(noteInfo){
    return {
        type: "note-txt", 
        isPinned: false, 
        info: { txt:noteInfo.txt},
        style: { backgroundColor: noteInfo.backgroundColor }
    }
}
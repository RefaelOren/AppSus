import {storageService} from '../../../services/async-storage.service.js';
import {utilService} from '../../../services/util.service.js';

export const noteService={
    query,
    togglePin,
    addNote,
    removeNote,
    updateNote,
}
const NOTES_KEY = 'notesDB'

const notes = [ 
    { 
        id: "n101", 
        type: "note-txt", 
        isPinned: true, 
        info:
        {
            tags: ['Work'], 
            txt: "Fullstack Me Baby!",
            title: "" 
        },
        style: { backgroundColor: "lightgreen" } 
    }, 
    { 
        id: "n102", 
        type: "note-img",
        isPinned: false, 
        info: 
        {
            tags: ['Work','Home'],
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw0gWlEimLsPylCKAm95y1K27fCdzXEHGhXYTfEWXo&s", 
            title: "Bobi and Me" 
        }, 
        style: { backgroundColor: "lightblue" } 
    }, 
    { 
        id: "n103", 
        type: "note-todos", 
        isPinned: false,
        info: 
        { 
            title: "Get my stuff together",
            tags: ['Home'], 
            todos:
            [ 
                { txt: "Driving liscence", doneAt: null }, 
                { txt: "Coding power", doneAt: 187111111}
            ]
        },
        style: { backgroundColor: "whitesmoke" } 
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

function updateNote(note){
    return storageService.put(NOTES_KEY,note)
}

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _createTxtNote(noteInfo){
    return {
        type: "note-txt", 
        isPinned: false, 
        info: 
            { 
                title: '',
                txt:noteInfo.txt,
                tags:[],
            },
        style: { backgroundColor: noteInfo.backgroundColor }
    }
}
import {storageService} from '../../../services/async-storage.service.js';
import {utilService} from '../../../services/util.service.js';

export const noteService={
    query,
    togglePin,
    addNote,
    removeNote,
    updateNote,
    getTags,
    addTodo,
}
const NOTES_KEY = 'notesDB'
const TAGS_KEY = 'tagsDB'

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
    },
    { 
        id: "n104", 
        type: "note-txt", 
        isPinned: false, 
        info:
        {
            tags: ['Home'], 
            txt: "Check mail",
            title: "I Like Mail" 
        },
        style: { backgroundColor: "lightgoldenrodyellow" } 
    }, 
    { 
        id: "n105", 
        type: "note-txt", 
        isPinned: true, 
        info:
        {
            tags: ['Work','Home'], 
            txt: "Watch Netflix",
            title: "Netflix&Chill" 
        },
        style: { backgroundColor: "lightblue" } 
    }, 
    { 
        id: "n106", 
        type: "note-txt", 
        isPinned: false, 
        info:
        {
            tags: [], 
            txt: "What about love",
            title: "" 
        },
        style: { backgroundColor: "lightgreen" } 
    },
    { 
        id: "n107", 
        type: "note-todos", 
        isPinned: true,
        info: 
        { 
            title: "Groceries List",
            tags: ['Home'], 
            todos:
            [ 
                { txt: "Tomatos", doneAt: null }, 
                { txt: "Bamba", doneAt: 187111111},
                { txt: "Cola", doneAt: null},
                { txt: "Meat", doneAt: null},
                { txt: "Rice", doneAt: 187111111},
            ]
        },
        style: { backgroundColor: "lightcoral" } 
    },
    { 
        id: "n108", 
        type: "note-img",
        isPinned: true, 
        info: 
        {
            tags: [],
            url: "../../assets/img/Fotolia_Brain-Creativity.jpg", 
            title: null, 
        }, 
        style: { backgroundColor: "whitesmoke" } 
    },  
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

function addTodo(noteInfo){
    const note = _createTodoNote(noteInfo)
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
        isPinned: noteInfo.isPinned || false, 
        info: 
            { 
                title: noteInfo.title || '',
                txt:noteInfo.txt,
                tags: noteInfo.tags || [],
            },
        style: { backgroundColor: noteInfo.backgroundColor }
    }
}

function _createTodoNote(noteInfo){
    return {
        type: "note-todos", 
        isPinned: noteInfo.isPinned || false,
        info: 
        { 
            title: noteInfo.title || '', 
            todos: noteInfo.txt || [],
            tags: noteInfo.tags || [],
            
        },
        style: { backgroundColor: noteInfo.backgroundColor }
    }
}

function getTags(){
    return storageService.query(TAGS_KEY)
        .then(tags=>{
            if(!tags || !tags.length){
                tags = ['Home','Work']
                _save(TAGS_KEY,tags)
            }
            return tags
        })
}
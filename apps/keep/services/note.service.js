import {storageService} from '../../../services/async-storage.service.js';
import {utilService} from '../../../services/util.service.js';

export const noteService={
    query,
}
const NOTES_KEY = 'notesDB'

const notes = [ 
    { 
        id: "n101", 
        type: "note-txt", 
        isPinned: true, 
        info: { txt: "Fullstack Me Baby!" } 
    }, 
    { 
        id: "n102", 
        type: "note-img", 
        info: { 
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw0gWlEimLsPylCKAm95y1K27fCdzXEHGhXYTfEWXo&s", 
            title: "Bobi and Me" 
        }, 
        style: { backgroundColor: "#00d" } 
    }, 
    { 
        id: "n103", 
        type: "note-todos", 
        info: { label: "Get my stuff together", 
            todos: [ 
                { txt: "Driving liscence", doneAt: null }, 
                { txt: "Coding power", doneAt: 187111111}
                ]
            } 
    } 
] 

function query(){ 
    return storageService.query(NOTES_KEY)
        .then(note => {
            if(!note || !note.length){
                return storageService.put(NOTES_KEY,notes)
            }
            else return note[0]
        })
}
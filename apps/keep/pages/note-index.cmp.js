import {noteService} from '../services/note.service.js'

import noteDetails from './note-details.cmp.js'
import noteList from '../cmps/note-list.cmp.js'
import noteAdd from '../cmps/note-add.cmp.js'
import noteFilter from '../cmps/note-filter.cmp.js'


export default {
    template: `
        <section class="note-index">
            <note-filter/>
            <div class="note-container">
                <note-add @add="addNote"/>
                <note-list
                    @toggle="togglePin"
                    @remove="removeNote"
                    @changecolor="changecolor" 
                    v-if="notes" 
                    :pinnedNotes="pinnedNotesToShow"
                    :unPinnedNotes="unPinnedNotesToShow"/>
                <note-details />
            </div>
        </section>
    `,
    data(){
        return {
            notes:[],
            pinnedNotes:[],
            unPinnedNotes:[],
        }
    },
    created(){
        noteService.query()
            .then(notes => {
                this.notes = notes
                this.sortNotes()
            })
    },
    methods: {
        togglePin(id){
            noteService.togglePin(id)
            const idx = this.notes.findIndex(note => note.id === id)
            this.notes[idx].isPinned = !this.notes[idx].isPinned
            this.sortNotes()
        },
        sortNotes(){
            this.pinnedNotes = []
            this.unPinnedNotes = []
            this.notes.forEach(note => {
                if(note.isPinned) this.pinnedNotes.push(note)
                else this.unPinnedNotes.push(note)
            });
        },
        changecolor(changeNote){
            const idx = this.notes.findIndex(note => note.id === changeNote.id)
            this.notes[idx].style.backgroundColor = changeNote.bgColor
            noteService.updateNote(this.notes[idx])
        },
        addNote(noteInfo){
            console.log(noteInfo);
            noteService.addNote(noteInfo)
                .then(note=>{
                    console.log('bef',this.notes);
                    this.notes.push(note)
                    console.log('aft',this.notes);
                    this.sortNotes()
                })
        },
        removeNote(id){
            // console.log(id);
            noteService.removeNote(id)
            const idx = this.notes.findIndex(note => note.id === id)
            this.notes.splice(idx, 1)
            this.sortNotes()
        }
      
    },
    computed: {
        pinnedNotesToShow(){
            return this.pinnedNotes
        },
        unPinnedNotesToShow(){
            return this.unPinnedNotes
        },
    },
    components: {
		noteList,
        noteDetails,
        noteAdd,
        noteFilter,
	},
};
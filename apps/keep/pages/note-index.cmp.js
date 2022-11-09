import {noteService} from '../services/note.service.js'

import noteDetails from './note-details.cmp.js'
import noteList from '../cmps/note-list.cmp.js'


export default {
    template: `
        <section class="note-index">
            <h1>note index</h1>
            <note-list
                @toggle="togglePin" 
                v-if="notes" 
                :pinnedNotes="pinnedNotesToShow"
                :unPinnedNotes="unPinnedNotesToShow"/>
            <note-details />
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
	},
};
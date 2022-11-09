import {noteService} from '../services/note.service.js'

import noteDetails from './note-details.cmp.js'
import noteList from '../cmps/note-list.cmp.js'


export default {
    template: `
        <section class="note-index">
            <h1>note index</h1>
            <note-list 
                v-if="notes" 
                :notes="notesToShow"/>
            <note-details />
        </section>
    `,
    data(){
        return {
            notes:[],
        }
    },
    created(){
        noteService.query()
            .then(notes => {
                this.notes = notes
                console.log(this.notes);
            })
    },
    methods: {
      
    },
    computed: {
        notesToShow(){
            return this.notes
        },
    },
    components: {
		noteList,
        noteDetails,
	},
};
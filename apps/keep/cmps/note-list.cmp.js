import noteImg from "./note-img.cmp.js";
import noteTxt from "./note-txt.cmp.js";
import noteTodos from "./note-todos.cmp.js";

export default {
    props:['notes'],
    template: `
        <section class="note-list">
            <ul>
                <li v-for="note in notes" :key="note.id">
                    <!-- <note-preview :note="note"/> -->
                    <component
                        :is="note.type" 
                        :note="note">
                    </component>
                </li>
            </ul>
        </section>
    `,
    data(){
        return {

        }
    },
    methods: {
      
    },
    computed: {

    },
    components: {
		noteTodos,
        noteTxt,
        noteImg,
	},
};
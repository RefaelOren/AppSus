import noteImg from './note-img.cmp.js';
import noteTxt from './note-txt.cmp.js';
import noteTodos from './note-todos.cmp.js';

export default {
    props: ['pinnedNotes', 'unPinnedNotes'],
    template: `
        <section class="note-list">
            <ul>
                <h3>pinned</h3>
                <li v-for="note in pinnedNotes" :key="note.id">
                    <!-- <note-preview :note="note"/> -->
                <component
                    @toggle="togglePin(note.id)"
                    @remove="remove(note.id)"
                    :is="note.type" 
                    :note="note">    
                </component>
            </li>
        </ul>
        <ul>
            <h3>unPinned</h3>
            <li v-for="note in unPinnedNotes" :key="note.id">
                <!-- <note-preview :note="note"/> -->
                <component
                    @toggle="togglePin(note.id)"
                    @remove="remove(note.id)"
                    :is="note.type" 
                    :note="note">    
                </component>
                </li>
            </ul>
        </section>
    `,
    data() {
        return {};
    },
    methods: {
        togglePin(id) {
            console.log(id);
            this.$emit('toggle', id);
        },
        remove(id){
            this.$emit('remove',id)
        },
    },
    computed: {},
    components: {
        noteTodos,
        noteTxt,
        noteImg,
    },
};

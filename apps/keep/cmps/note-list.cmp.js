import noteImg from './note-img.cmp.js';
import noteTxt from './note-txt.cmp.js';
import noteTodos from './note-todos.cmp.js';

export default {
    props: ['pinnedNotes', 'unPinnedNotes'],
    template: `
        <section class="note-list">

            <div class="pine">
                <h3>pinned</h3>
            </div>

            <ul>
                <li v-for="note in pinnedNotes" :key="note.id">
                    <!-- <note-preview :note="note"/> -->
                <component
                    @toggle="togglePin(note.id)"
                    @color="changecolor"
                    @remove="remove(note.id)"
                    :is="note.type" 
                    :note="note">    
                </component>
            </li>
        </ul>

        <div class="pine">
            <h3>unPinned</h3>
        </div>

        <ul>
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
            this.$emit('toggle', id);
        },
        remove(id){
            this.$emit('remove',id)
        },
        changecolor(note){
            this.$emit('changecolor',note)
        },
    },
    computed: {},
    components: {
        noteTodos,
        noteTxt,
        noteImg,
    },
};

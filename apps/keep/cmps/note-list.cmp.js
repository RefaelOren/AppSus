import noteImg from './note-img.cmp.js';
import noteTxt from './note-txt.cmp.js';
import noteTodos from './note-todos.cmp.js';

export default {
    props: ['pinnedNotes', 'unPinnedNotes','tags'],
    template: `
        <section class="note-list">

            <div class="pine">
                <h3>pinned</h3>
            </div>

            <ul>
                <li v-for="note in pinnedNotes" :key="note.id">
                    <!-- <note-preview :note="note"/> -->
                <component
                    @todo="todo"
                    @openDetails="openDetails"
                    @tag="ToggleCheck"
                    @toggle="togglePin(note.id)"
                    @color="changecolor"
                    @remove="remove(note.id)"
                    :is="note.type" 
                    :note="note"
                    :tags="tags">    
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
                    @todo="todo"
                    @openDetails="openDetails"
                    @tag="ToggleCheck"
                    @toggle="togglePin(note.id)"
                    @remove="remove(note.id)"
                    @color="changecolor"
                    :is="note.type" 
                    :note="note"
                    :tags="tags">    
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
        ToggleCheck(tag){
            this.$emit('tag',tag)
        },
        todo(todo){
            this.$emit('todo', todo);
        },
        openDetails(note){
            this.$emit('openDetails',note)
        }
    },
    computed: {},
    components: {
        noteTodos,
        noteTxt,
        noteImg,
    },
};

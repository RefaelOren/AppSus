export default {
    props:['note'],
    template: `
        <section class="note note-todos" :style="noteStyle">
            <h2>{{ note.info.label }}</h2>
            <section class="todos" v-for="todo in note.info.todos">
                <input type="checkbox" :name="todo.txt" v-if="todo.doneAt">
                <input type="checkbox" :name="todo.txt" v-else checked>
                <label :for="todo.txt"> {{todo.txt}}</label>
            </section>
            <i :style="{color:'black'}" title="Unpin" @click="togglePin(note.id)" class="fa-solid fa-thumbtack" v-if="note.isPinned"></i>
            <i :style="{color:'lightgray'}" title="Pin" @click="togglePin(note.id)" class="fa-solid fa-thumbtack" v-else></i>
            <button class="remove-btn" @click="remove(note.id)">X</button>
        </section>
    `,
    data(){
        return {
            // value:null
        }
    },
    methods: {
        togglePin(id){
            console.log(id);
            this.$emit('toggle',id)
        },
        remove(id){
            this.$emit('remove',id)
        },  
    },
    computed: {
        noteStyle(){
            return {
                backgroundColor: this.note.style.backgroundColor,
            }
        },
	},
};
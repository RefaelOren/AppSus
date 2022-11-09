export default {
    props:['note'],
    template: `
        <section class="note note-todos">
            <h2>{{ note.info.label }}</h2>
            <section class="todos" v-for="todo in note.info.todos">
                <input type="checkbox" :name="todo.txt" v-if="todo.doneAt">
                <input type="checkbox" :name="todo.txt" v-else checked>
                <label :for="todo.txt"> {{todo.txt}}</label>
            </section>
        </section>
    `,
    data(){
        return {
            // value:null
        }
    },
    computed: {
	},
};
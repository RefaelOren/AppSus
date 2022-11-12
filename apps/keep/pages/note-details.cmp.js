export default {
    props: ['note','tags'],
    template: `
        <section class="note-details">
            <p>title</p>
           <input type="txt" v-model="note.info.title" value="note.info.title">
           <p>txt</p>
           <input
                v-if="note.type === 'note-todos'"
                v-for="(note, index) in note.info.todos"
                :key="index"
                v-model="note.info.todos[index].txt"
                value="note.info.todos[index].txt"/>
           <input type="txt" v-model="note.info.txt" value="note.info.txt" v-else>
        </section>
    `,
    data(){
        return{
            theNote:null
        }
    },
    computed: {
	},
    components: {
    },
};
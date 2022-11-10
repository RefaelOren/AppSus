export default {
    props:['note'],
    template: `
        <section class="note note-txt" :style="noteStyle">
            <h2>{{ note.info.txt }}</h2>
            <i :style="{color:'black'}" title="Unpin" @click="togglePin(note.id)" class="fa-solid fa-thumbtack" v-if="note.isPinned"></i>
            <i :style="{color:'lightgray'}" title="Pin" @click="togglePin(note.id)" class="fa-solid fa-thumbtack" v-else></i>
            <button class="remove-btn" @click="remove(note.id)">X</button>
        </section>
    `,
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
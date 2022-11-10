export default {
    props:['note'],
    template: `
        <section class="note note-img" :style="noteStyle">
            <img :src="note.info.url" />
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
		imgUrl() {
            return `../../img/${this.car.vendor}.png`
        },
        noteStyle(){
            return {
                backgroundImage: 'url('+this.note.info.url+')',
            }
        },
	},
};
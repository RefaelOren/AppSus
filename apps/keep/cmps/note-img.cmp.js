export default {
    props:['note'],
    template: `
        <section class="note note-img" :style="noteStyle">
            <h3>{{ note.info.title }}</h3>
            <img :src="note.info.url" />
        </section>
    `,
    methods: {
        
    },
    computed: {
		imgUrl() {
            return `../../img/${this.car.vendor}.png`
        },
        noteStyle(){
            return {
                backgroundColor: this.note.style.backgroundColor,
            }
        },
	},
};
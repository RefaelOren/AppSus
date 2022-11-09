export default {
    props:['note'],
    template: `
        <section class="note note-img" :style="noteStyle">
            <h3>{{ note.info.title }}</h3>
            <img :src="note.info.url" />
            <button class="btn-pin" @click="togglePin(note.id)" >
                <!-- <img src="data:image/svg+xml;base64,PHN2ZyB4bW
                xucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdp
                ZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwID
                I0IDI0Ij4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAw
                aDI0djI0SDB6Ii8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZD
                0iTTE3IDRhMiAyIDAgMCAwLTItMkg5Yy0xLjEgMC0yIC45
                LTIgMnY3bC0yIDN2Mmg2djVsMSAxIDEtMXYtNWg2di0ybC
                0yLTNWNHoiLz4KPC9zdmc+Cg=="> -->
            </button>
        </section>
    `,
    methods: {
        togglePin(id){
            console.log(id);
            this.$emit('toggle',id)
        }, 
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
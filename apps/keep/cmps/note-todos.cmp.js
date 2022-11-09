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
            <button class="btn-pin" @click="togglePin(note.id)" >
                <i class="fa-regular fa-thumbtack"></i>
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
    },
    computed: {
        noteStyle(){
            return {
                backgroundColor: this.note.style.backgroundColor,
            }
        },
	},
};
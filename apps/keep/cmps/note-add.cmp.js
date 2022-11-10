export default {
    template: `
        <section class="note-add">
            <form @submit.prevent="addNote">
                <input type="text" placeholder="Take a note..." @click="openDetails('txt')" v-model="noteTxt">
                <button>Save</button>
            </form>
            <button class="fa-regular fa-square-check" @click="openDetails('todos')"></button>
            <button class="fa-regular fa-image" @click="openDetails('img')"></button>
        </section>
    `,
    data(){
        return{
            noteTxt:null,
        }
    },
    methods: {
        addNote(){
            if(this.noteTxt){
                // console.log(this.noteTxt);
                this.$emit('add',this.noteTxt)
                this.noteTxt = null;
            }
        },
        openDetails(mode){
            console.log(mode);
        } 
    },
};
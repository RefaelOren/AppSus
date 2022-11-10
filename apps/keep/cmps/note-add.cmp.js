export default {
    template: `
        <section class="note-add" :style="inputStyle">
            <form class="add-form" @submit.prevent="addNote">
                <input type="text" placeholder="Take a note..." @click="openDetails('txt')" v-model="noteTxt" >
                <div class="color-container">
                    <div class="toggle-color" @click="toggleColor"><i class="fas fa-palette"></i></div>    
                    <div class="color-picker" v-if="iscolor">
                        <div class="color" :style="{backgroundColor:'lightblue'}" @click="chooseBgColor('lightblue')"></div>
                        <div class="color" :style="{backgroundColor:'lightcoral'}" @click="chooseBgColor('lightcoral')"></div>
                        <div class="color" :style="{backgroundColor:'lightgoldenrodyellow'}" @click="chooseBgColor('lightgoldenrodyellow')"></div>
                        <div class="color" :style="{backgroundColor:'lightgreen'}" @click="chooseBgColor('lightgreen')"></div>
                        <div class="color" :style="{backgroundColor:'whitesmoke'}" @click="chooseBgColor('whitesmoke')"></div>
                    </div>
                </div>
                <button>&#128190;</button>
            </form>
            <button class="fa-regular fa-square-check note-btn" @click="openDetails('todos')"></button>
            <button class="fa-regular fa-image note-btn" @click="openDetails('img')"></button>
        </section>
    `,
    data(){
        return{
            noteTxt:null,
            bgColor:'whitesmoke',
            iscolor:false,
        }
    },
    methods: {
        addNote(){
            if(this.noteTxt){
                // console.log(this.noteTxt);
                this.$emit('add',{txt:this.noteTxt,backgroundColor:this.bgColor})
                this.noteTxt = null
                this.bgColor = 'whitesmoke'
            }
        },
        chooseBgColor(color){
            this.bgColor = color
            this.toggleColor()
        },
        toggleColor(){
            this.iscolor = !this.iscolor
        }, 
        openDetails(mode){
            console.log(mode);
        },
    },
    computed: {
        inputStyle(){
            return {
                backgroundColor: this.bgColor,
            }
        },
	},
};
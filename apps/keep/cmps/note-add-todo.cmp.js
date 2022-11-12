
export default {
    template: `
        <section class="note-add" :style="inputStyle" ref="add" tabindex="0">
            <form class="add-form" @submit.prevent="addNote">
                <input class="title" type="text" placeholder="Title" v-model="noteTitle"> 
                <div class="init-form" id="init-form">
                    <div @click="makeInput" class="todo-btn">+</div>
                    <div class="todo-inputs">   
                        <input
                            oncontextmenu="return false"
                            @contextmenu="removeInput(index)"
                            type="input"
                            v-for="(notetodo, index) in noteTodos"
                            :key="index"
                            title="Right click to delete"
                            v-model="noteTodos[index].txt"
                            placeholder="Add an item"/>
                    </div>
                    <div class="color-container">
                        <div class="toggle-color" @click="toggleColor"><i class="fas fa-palette"></i></div>    
                        <div class="color-picker" v-if="iscolor">
                            <div class="color" :style="{backgroundColor:'lightcoral'}" @click="chooseBgColor('lightcoral')"></div>
                            <div class="color" :style="{backgroundColor:'lightsalmon'}" @click="chooseBgColor('lightsalmon')"></div>
                            <div class="color" :style="{backgroundColor:'lightpink'}" @click="chooseBgColor('lightpink')"></div>
                            <div class="color" :style="{backgroundColor:'lightgoldenrodyellow'}" @click="chooseBgColor('lightgoldenrodyellow')"></div>
                            <div class="color" :style="{backgroundColor:'lightgreen'}" @click="chooseBgColor('lightgreen')"></div>
                            <div class="color" :style="{backgroundColor:'lightseagreen'}" @click="chooseBgColor('lightseagreen')"></div>
                            <div class="color" :style="{backgroundColor:'lightblue'}" @click="chooseBgColor('lightblue')"></div>
                            <div class="color" :style="{backgroundColor:'whitesmoke'}" @click="chooseBgColor('whitesmoke')"></div>
                        </div>
                    </div>
                    <button><i class="fa-regular fa-floppy-disk"></i></button>
                    <button @click="isFormOpen = false" @click="closeAdd">close</button>
                </div>
            </form>
        </section>
    `,
    data(){
        return{
            noteTodos:[{txt:null,doneAt:null}],
            bgColor:'whitesmoke',
            iscolor:false,
            noteTitle:null,
        }
    },
    methods: {
        addNote(){
            if(this.noteTodos[0].txt){
                this.$emit('addTodo',{txt:this.noteTodos,backgroundColor:this.bgColor,title:this.noteTitle})
                // this.noteTxt = null
                // this.bgColor = 'whitesmoke'
                this.$emit('closeAdd',true)
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
        closeAdd(){
            this.$emit('closeAdd',true)
        },
        makeInput(){
            this.noteTodos.push({txt:null,doneAt:null})
        },
        removeInput(index){
            this.noteTodos.splice(index,1)
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
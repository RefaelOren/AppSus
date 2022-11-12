export default {
    template: `
        <section class="note-add" :style="inputStyle" ref="add" tabindex="0">
            <form class="add-form" @submit.prevent="addNote">
                <input class="title" type="text" placeholder="Title" v-model="noteTitle" v-if="isFormOpen">
                <div class="init-form">
                    <input type="text" placeholder="Take a note..." @focus="isFormOpen = true" v-model="noteTxt">
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
                    <button @click="closeAdd" v-if="isFormOpen">close</button>
                </div>
            </form>  
            <button class="fa-regular fa-square-check note-btn" v-if="isFormOpen === false" @click="openTodo"></button>
            <button class="btn btn-info" @click="onPickFile"><i class="fa-solid fa-image"></i></button>
            <input
                type="file"
                style="display: none"
                ref="fileInput"
                accept="image/*"
                @change="onFilePicked"/>
            </section>
            `,
    data(){
        return{
            noteTxt:null,
            bgColor:'whitesmoke',
            iscolor:false,
            noteTitle:null,
            isFormOpen:false,
            image: null,
            imageUrl:null
        }
    },
    mounted(){
        while (this.isFormOpen||this.check) {
            this.open = true
        }
    },
    methods: {
        addNote(){
            if(this.noteTxt){
                // console.log(this.noteTxt);
                this.$emit('add',{txt:this.noteTxt,backgroundColor:this.bgColor,title:this.noteTitle})
                this.noteTxt = null
                this.bgColor = 'whitesmoke'
                this.isFormOpen = false
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
            this.isFormOpen = false
            this.$emit('closeAdd',true)
        },
        openTodo(){
            this.$emit('openTodo',false)
        },
        onPickFile () {
            this.$refs.fileInput.click()
        },
        onFilePicked (event) {
            const files = event.target.files
            let filename = files[0].name
            const fileReader = new FileReader()
            fileReader.addEventListener('load', () => {
              this.imageUrl = fileReader.result
              this.$emit('addPhoto',this.imageUrl)
            })
            fileReader.readAsDataURL(files[0])
            this.image = files[0]
        }
    },
    computed: {
        inputStyle(){
            return {
                backgroundColor: this.bgColor,
            }
        },
	},
};
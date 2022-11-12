export default {
    props: ['note','tags'],
    template: `
        <section class="note-details" :style="noteStyle" v-if="!tags">
            <h2>title</h2>
            <input type="txt" v-model="note.info.title" value="note.info.title" placeholder="Add title">
            <h2>text</h2>
            <div v-if="note.type === 'note-todos'">
                <div @click="makeInput" class="todo-btn">+</div>
                <input
                    v-for="(todo, index) in note.info.todos"
                    :key="index"
                    v-model="note.info.todos[index].txt"
                    value="note.info.todos[index].txt"
                    oncontextmenu="return false"
                    placeholder="Add task"
                    @contextmenu="removeInput(index)"
                    title="Right click to delete"/>
            </div>
            <input type="txt" v-model="note.info.txt" value="note.info.txt" placeholder="Add text" v-else>
            <div v-if="note.type === 'note-img'">
                <button class="btn btn-info fa-solid fa-image" @click="onPickFile"></button>
                <input
                type="file"
                style="display: none"
                ref="fileInput"
                accept="image/*"
                @change="onFilePicked"/>
            </div>
            <button @click="$emit('closeDetailes',note)">close&save</button>
        </section>
        <section class="note-details" v-else>
            <div @click="makeTag" class="todo-btn">+</div>
            <div
                v-for="tag in tags"
                :key="tag">
               {{tag}} </div>
            <input
                v-for="(tag, index) in tagDe"
                :key="index"
                v-model="tagDe[index]"
                value="tagDe[index]"
                oncontextmenu="return false"
                placeholder="Add tag"
                @contextmenu="removeTag(index)"
                title="Right click to delete"/>
            <button @click="closeTags">close&save</button>
        </section>
    `,
    data(){
        return{
            theNote:null,
            image: null,
            imageUrl:null,
            tagDe:[],
            
        }
    },
    computed: {
	},
    methods: {
        makeInput(){
            this.note.info.todos.push({txt:null,doneAt:null})
        },
        removeInput(index){
            this.note.info.todos.splice(index,1)
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
              this.note.info.url = this.imageUrl
            })
            fileReader.readAsDataURL(files[0])
            this.image = files[0]
        },
        removeTag(index){
            this.tagDe.splice(index,1)
        },
        makeTag(){
            this.tagDe.push('')
        },
        closeTags(){
            this.tagDe.forEach(tag => {
                this.tags.push(tag)
            });
            this.$emit('closeTags',this.tags)
        }
    },
    computed: {
        noteStyle(){
            return {
                backgroundColor: this.note.style.backgroundColor
            }
        },
	},
};
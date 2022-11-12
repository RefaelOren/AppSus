export default {
    props:['note','tags'],
    template: `
        <section ref="note" tabindex="0" class="note note-todos" :style="noteStyle">
            <h2>{{ note.info.label }}</h2>
            <section class="todos" v-for="todo in note.info.todos">
                <input type="checkbox" :name="todo.txt" @click="toggleTodo(todo.txt,todo.doneAt)" v-if="todo.doneAt" checked>
                <input type="checkbox" :name="todo.txt" @click="toggleTodo(todo.txt,todo.doneAt)" v-else>
                <label :for="todo.txt"> {{todo.txt}}</label>
            </section>
            <i :style="{color:'black'}" title="Unpin note" @click="togglePin(note.id)" class="fa-solid fa-thumbtack" v-if="note.isPinned"></i>
            <i :style="{color:'lightgray'}" title="Pin note" @click="togglePin(note.id)" class="fa-solid fa-thumbtack" v-else></i>
            <div class="note-tags">
                <span class="note-tag" v-for="tag in note.info.tags">{{tag}} </span>
            </div>
            <div class="edit-container">
                <div class="color-container">
                    <div class="toggle-color" @click="toggleColor" title="Background options"><i class="fas fa-palette"></i></div>    
                    <div class="color-picker" v-if="iscolor">
                        <div class="color" :style="{backgroundColor:'lightblue'}" @click="chooseBgColor('lightblue')"></div>
                        <div class="color" :style="{backgroundColor:'lightcoral'}" @click="chooseBgColor('lightcoral')"></div>
                        <div class="color" :style="{backgroundColor:'lightgoldenrodyellow'}" @click="chooseBgColor('lightgoldenrodyellow')"></div>
                        <div class="color" :style="{backgroundColor:'lightgreen'}" @click="chooseBgColor('lightgreen')"></div>
                        <div class="color" :style="{backgroundColor:'whitesmoke'}" @click="chooseBgColor('whitesmoke')"></div>
                    </div>
                </div>
                <div class="fa-solid fa-tag tag" @click="toggleTag"></div>
                <div class="tags-list" v-if="isTag">
                    <section  ref="tag" v-for="tag in tags">
                        <input  type="checkbox" :name="tag" @click="ToggleCheck(tag)" v-if="note.info.tags.findIndex(tagi=>tagi === tag) > -1" checked>
                        <input type="checkbox" :name="tag" @click="ToggleCheck(tag)" v-else>
                        {{tag}}
                    </section>
                </div>
                <button class="remove-btn" @click="remove(note.id)" title="Delete note">X</button>
            </div>
        </section>
    `,
    data(){
        return{
            bgColor:this.note.style.backgroundColor,
            iscolor:false,
            isTag:false
        }
    },
    methods: {
        togglePin(id){
            console.log(id);
            this.$emit('toggle',id)
        },
        remove(id){
            this.$emit('remove',id)
        },
        chooseBgColor(color){
            this.bgColor = color
            this.toggleColor()
            this.$emit('color',{bgColor:this.bgColor,id:this.note.id})
        },
        toggleColor(){
            this.iscolor = !this.iscolor
            this.focusOnNote()
        },
        focusOnNote() {
            const noteRef = this.$refs.note;
            if(this.iscolor) noteRef.focus();
            else noteRef.blur()
        },
        ToggleCheck(tag){
            if(this.note.info.tags.findIndex(tagi=> tagi === tag) > -1) {
                this.$emit('tag',{tag:tag,status:'remove',id:this.note.id})
            }
            else {
                this.$emit('tag',{tag:tag,status:'add',id:this.note.id})
            }
        },
        toggleTag(){
            this.isTag = !this.isTag
            this.focusOnNote()
        },
        toggleTodo(txt,done){
            const todoLoc = this.note.info.todos.findIndex(todo=>todo.txt === txt)
            this.$emit('todo', {id:this.note.id,todoLoc:todoLoc,done:done});
        },  
    },
    computed: {
        noteStyle(){
            return {
                backgroundColor: this.bgColor,
            }
        },
        noteWatch(){
            return this.note
        }
	},
    watch:{
        noteWatch(){
            return console.log('change');
        }
    },
};
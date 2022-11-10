export default {
    props:['note'],
    template: `
        <section ref="notePre" class="note note-todos" :style="noteStyle">
            <h2>{{ note.info.label }}</h2>
            <section class="todos" v-for="todo in note.info.todos">
                <input type="checkbox" :name="todo.txt" v-if="todo.doneAt">
                <input type="checkbox" :name="todo.txt" v-else checked>
                <label :for="todo.txt"> {{todo.txt}}</label>
            </section>
            <i :style="{color:'black'}" title="Unpin" @click="togglePin(note.id)" class="fa-solid fa-thumbtack" v-if="note.isPinned"></i>
            <i :style="{color:'lightgray'}" title="Pin" @click="togglePin(note.id)" class="fa-solid fa-thumbtack" v-else></i>
            <div class="edit-container">
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
                <button class="remove-btn" @click="remove(note.id)">X</button>
            </div>
        </section>
    `,
    data(){
        return{
            bgColor:this.note.style.backgroundColor,
            iscolor:false,
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
            const noteRef = this.$refs.notePre;
            noteRef.focus();
        }  
    },
    computed: {
        noteStyle(){
            return {
                backgroundColor: this.note.style.backgroundColor,
            }
        },
	},
};
export default {
    props:['note'],
    template: `
        <section ref="note" tabindex="0" class="note note-img" :style="noteStyle">
            <img :src="note.info.url"/>
            <div class="img-info" v-if="note.info.title||note.info.txt">
                <div class=img-title v-if="note.info.title">{{note.info.title}}</div>
                <div class=img-txt v-if="note.info.txt">{{note.info.txt}}</div>
            </div>
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
                <button class="remove-btn" @click="remove(note.id)" title="Delete note">X</button>
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
            const noteRef = this.$refs.note;
            if(this.iscolor) noteRef.focus();
            else noteRef.blur()
        }, 
    },
    computed: {
		imgUrl() {
            return `../../img/${this.car.vendor}.png`
        },
        noteStyle(){
            return {
                backgroundColor: this.bgColor,
                // backgroundImage: 'url('+this.note.info.url+')',
                borderColor:this.bgColor,
            }
        },
	},
};
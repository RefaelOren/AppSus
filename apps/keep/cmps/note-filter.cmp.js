export default {
    props:['tags'],
    template: `
        <section class="note-filter" :class="{icons:!isIcon}">
            
            <button @click="isIcon = !isIcon"><i class="fa-solid fa-bars"></i></button>

            <div class="filter-notes" @click="filter('')" :class="{select:selected === '',alone:!isIcon}" title="Notes">
                <svg class="icon light-bulb" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 
                    1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 
                    5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path>
                </svg>
                <div class="filter-name" v-if="isIcon">
                    <span>Notes</span>
                </div>
            </div>


            <div 
                class="filter-notes" 
                @click="filter(tag)" 
                :class="{select:selected === tag,alone:!isIcon}" 
                :title="tag" 
                v-for="tag in tags"
                :key="tag">

                <div class="fa-solid fa-tag icon tag"></div>
                <div class="filter-name" v-if="isIcon">
                    <span>{{tag}}</span>
                </div>
            </div>

            <!-- <div class="filter-notes home" @click="filter('Home')" :class="{select:selected === 'Home',alone:!isIcon}" title="Home" >
                <div class="fa-solid fa-tag icon tag"></div>
                <div class="filter-name" v-if="isIcon">
                    <span>Home</span>
                </div>
            </div> -->

            <div class="filter-notes" :class="{select:selected === 'Edit',alone:!isIcon}" title="Edit Labels" :class="{select:selected === 'Edit',alone:!isIcon}" @click="editTags('Edit')">
                <svg class="icon pen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M20.41 4.94l-1.35-1.35c-.78-.78-2.05-.78-2.83 0L13.4 6.41 3 16.82V21h4.18l10.46-10.46 2.77-2.77c.79-.78.79-2.05 0-2.83zm-14 
                    14.12L5 19v-1.36l9.82-9.82 1.41 1.41-9.82 9.83z"></path>
                </svg>
                <div class="filter-name" v-if="isIcon">
                    <span>Edit labels</span>
                </div>
            </div>

        </section>
    `,
    data() {
        return {
            selected: '',
            isIcon: false,
        };
    },
    methods: {
        filter(filterBy) {
            this.$emit('filter', filterBy);
            this.selected = filterBy;
        },
        editTags(filter){
            this.selected = filter;
            this.$emit('editTags', filter);
            setTimeout(()=>{this.selected=''},2000)
        }
    },
};

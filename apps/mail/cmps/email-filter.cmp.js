export default {
    template: `
        <section class="email-filter">
            <img class="gb_zc" src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png" srcset="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png 1x, https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r5.png 2x " alt="" aria-hidden="true" role="presentation" style="width:95px;height:40px">
                <div className="txt-search-box">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input class="txt-search" @input="filter" v-model="filterBy.txt"  type="text" placeholder="Search mail" />
               
                </div>
                <div className="filter-box">
                    <label htmlFor="all">
                        All
                        <input @change="filter" v-model="filterBy.isRead"  type="radio" value="all" id="all" />
                    </label>
                    <label htmlFor="read">
                        Read
                        <input @change="filter" v-model="filterBy.isRead"  type="radio" value="read" id="read" />
                    </label>
                    <label htmlFor="unRead">
                        Unread
                        <input @change="filter" v-model="filterBy.isRead"  type="radio" value="unRead" id="unRead" />
                    </label>
                </div>
                    
        </section>
    `,

    data() {
        return {
            filterBy: {
                txt: '',
                isRead: '',
            },
        };
    },
    methods: {
        filter() {
            this.$emit('filter', { ...this.filterBy });
        },
    },
};

import { mailService } from '../services/mail-service.js';

// import emailList from '../cmps/email-list.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import emailFolderList from '../cmps/email-folder-list.cmp.js';
import emailCompose from '../cmps/email-compose.cmp.js';

export default {
    template: `
        <section class="mail-index">
            <!-- <email-filter @filter="filter" />      -->
            <email-compose />
            <email-folder-list />
            <router-view></router-view>
            <!-- <email-list :emails="emailsToDisplay"/> -->
            
        </section>
    `,
    data() {
        return {
            emails: [],
            filterBy: {
                txt: '',
                isRead: '',
            },
        };
    },
    created() {
        console.log('hey');
        mailService.query().then((emails) => {
            this.emails = emails;
        });
    },

    methods: {
        filter(filterBy) {
            this.filterBy = filterBy;
        },
    },

    computed: {},

    components: {
        // emailFilter,
        emailFolderList,
        emailCompose,
    },
};

import { mailService } from '../services/mail-service.js';

import emailFolderList from '../cmps/email-folder-list.cmp.js';
import emailCompose from '../cmps/email-compose.cmp.js';

export default {
    template: `
        <section class="mail-index">
            <email-compose />
            <email-folder-list />
            <router-view></router-view>
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
        emailFolderList,
        emailCompose,
    },
};

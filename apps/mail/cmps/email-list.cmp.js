import { mailService } from '../services/mail-service.js';
import emailPreview from './email-preview.cmp.js';
import emailFilter from './email-filter.cmp.js';

export default {
    template: `
         <email-filter @filter="filter" />
         <section class="email-list">
             <div v-if="emailsToDisplay.length">
                 <div  v-for="email in  emailsToDisplay" :key="email.id" >
                     <email-preview @starred="updateStarred" :email="email" /> 
                 </div>
            </div>
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

    components: {
        emailPreview,
        emailFilter,
    },

    created() {
        this.renderEmails(this.$route.params.filter);
    },

    methods: {
        filter(filterBy) {
            this.filterBy = filterBy;
        },

        renderEmails(filterBy) {
            console.log(this.$route.params.filter);
            mailService.emailsToDisplay(filterBy).then((emails) => {
                this.emails = emails;
            });
        },

        updateStarred(emailId) {
            console.log(emailId);
        },
    },

    computed: {
        emailsToDisplay() {
            const regex = new RegExp(this.filterBy.txt, 'i');
            let emails = this.emails.filter((email) => regex.test(email.from));
            if (this.filterBy.isRead === 'read') {
                emails = emails.filter((email) => email.isRead);
            } else if (this.filterBy.isRead === 'unRead') {
                emails = emails.filter((email) => !email.isRead);
            }

            return emails;
        },

        emailsFilter() {
            return this.$route.params.filter;
        },
    },

    watch: {
        emailsFilter() {
            if (!this.$route.params.filter) return;
            console.log('oved');
            this.renderEmails(this.$route.params.filter);
        },
    },
};

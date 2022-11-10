import { mailService } from '../services/mail-service.js';
import emailPreview from './email-preview.cmp.js';
import emailFilter from './email-filter.cmp.js';

export default {
    template: `
         <email-filter @filter="filter" />
         <section class="email-list">
             <div v-if="emailsToDisplay.length">
                 <div  v-for="email in  emailsToDisplay" :key="email.id" >
                     <email-preview :email="email" /> 
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

    computed: {
        emailsToDisplay() {
            console.log(this.filterBy);
            const regex = new RegExp(this.filterBy.txt, 'i');
            let emails = this.emails.filter((email) =>
                regex.test(email.subject)
            );
            if (this.filterBy.isRead === 'read') {
                emails = emails.filter((email) => email.isRead);
            } else if (this.filterBy.isRead === 'unRead') {
                emails = emails.filter((email) => !email.isRead);
            }

            return emails;
        },
    },
};

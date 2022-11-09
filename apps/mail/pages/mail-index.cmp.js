import { mailService } from '../services/mail-service.js';

import emailList from '../cmps/email-list.cmp.js';

export default {
    template: `
        <section class="mail-index">
            <h1>mail index</h1>
            <email-list :emails="emails"/>
            
        </section>
    `,
    data() {
        return {
            emails: [],
        };
    },
    created() {
        console.log('hey');
        mailService.query().then((emails) => {
            this.emails = emails;
        });
    },
    components: {
        emailList,
    },
};

import { mailService } from '../services/mail-service.js';
import { eventBus } from '../../../services/event-bus.service.js'

export default {
    template: `
        <section v-if="email" class="email-details">
            <div className="section-center">
                <div className="page-btns">
                    <router-link to="/email/inbox">
                        <i class="fa-solid fa-arrow-left-long"></i>
                    </router-link>
                    <i class="fa-solid fa-trash-can" @click="deleteEmail"></i>
                    <button @click="sendNote">add as note</button>
                </div>
                <div className="subject">
                    <h3>{{email.subject}}</h3>
                    <h4>From: {{email.from}}</h4>
                    <p>{{sentAt}}</p>
                </div>
                <p>{{email.body}}</p>
            </div>
        </section>
    `,

    data() {
        return {
            email: null,
        };
    },

    created() {
        const { id } = this.$route.params;
        console.log(id);
        mailService.getById(id).then((email) => {
            this.email = email;
            console.log(this.email);
            this.email.isRead = true
            mailService.updateEmail(this.email)
        });

    },

    unmounted() {},

    methods: {
        deleteEmail(){
            mailService.removeEmail(this.email.id).then(()=>this.$router.push('/email/inbox'))
        },
        sendNote(){
           this.$router.push('/note')
            eventBus.emit('newNote',{title:this.email.subject,txt:this.email.body,backgroundColor:'whitesmoke'})
        }
    },

    computed: {
        sentAt() {
            return new Date(this.email.sentAt).toDateString();
        },
    },
};

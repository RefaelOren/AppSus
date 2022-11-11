import {
    showErrorMsg,
    showSuccessMsg,
} from '../../../services/event-bus.service.js';
import { mailService } from '../services/mail-service.js';

export default {
    template: `
       <section class="mail-compose"       >
             <span @click="isCompose = true" class="fa-solid fa-pen"></span>
       </section>
       <form @submit.prevent="save" class="compose" v-if="isCompose">
                 <div class="back-btn" @click="isCompose=false">
                     <i class="fa-solid fa-arrow-left-long"></i>
                 </div>                
                 <input 
                      v-model="newEmail.from" 
                      ref="from"
                      type="text" 
                      placeholder="From: email@email.com" />
                 <input 
                      v-model="newEmail.to" 
                      type="text" 
                      placeholder="To: email@email.com"/>
                 <input 
                      v-model="newEmail.subject" 
                      type="text" 
                      placeholder="Subject..."/>
                 <input 
                      v-model="newEmail.body" 
                      class="msg" 
                      type="text" 
                      placeholder="Message..." />
                 <button class="send-btn">Send</button>
        </form>
    `,

    data() {
        return {
            newEmail: mailService.getEmptyEmail(),
            isCompose: false,
        };
    },

    mounted() {
        // this.$refs.from.focus();
    },

    methods: {
        save() {
            console.log(this.newEmail);
            mailService
                .save(this.newEmail)
                .then((email) => {
                    console.log(email);
                    showSuccessMsg(`Email sent`);
                    this.$router.push('/email/inbox');
                })
                .catch((err) => {
                    showErrorMsg('Cannot send Email');
                });
            this.newEmail = mailService.getEmptyEmail();
            this.isCompose = false;
        },
    },
};

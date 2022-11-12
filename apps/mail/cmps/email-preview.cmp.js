export default {
    props: ['email'],
    template: `
      <section  
          class="email-preview" 
          :class="{'bg-blue':email.isRead}">
            <div class="checkbox">
                 <input type="checkbox" />
               <i class="fa-solid fa-star" :class="starredBg" @click=starred></i>
            </div>
            <router-link class="email-link" :to="'/email/details/' + email.id">
                <div className="sent-from">
                    <div :class="notReaded">{{sendFrom}}</div>
                </div>
                <div className="info" >
                    <div class="subject" :class="notReaded">{{subject}}</div>
                    <div class="date" :class="notReaded">{{date}}</div>
                </div>
            </router-link>
     </section>
                `,
    methods: {
        starred() {
            this.$emit('starred', this.email.id);
        },
    },

    computed: {
        sendFrom() {
            const from = this.email.from.split('@');
            return from[0];
        },
        date() {
            return new Date(this.email.sentAt).toDateString().substring(4, 10);
        },
        subject() {
            return this.email.subject;
        },
        starredBg() {
            return this.email.isStarred ? 'yellow' : 'grey';
        },
        notReaded() {
            if (!this.email.isRead) return 'bold';
        },
    },
};

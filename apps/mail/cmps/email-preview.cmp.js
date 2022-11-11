export default {
    props: ['email'],
    template: `
      <section  class="email-preview" :class="{'bg-blue':email.isRead}">
            <div class="checkbox">
                 <input type="checkbox" />
               <i class="fa-solid fa-star" :class="{yellow:email.isStarred,grey:!email.isStarred}" @click=starred></i>
            </div>
            <router-link class="email-link" :to="'/email/details/' + email.id">
                <div className="sent-from">
                    <div :class="{bold:!email.isRead}">{{sendFrom}}</div>
                </div>
                <div className="info" >
                    <div class="subject" :class="{bold:!email.isRead}">{{subject}}</div>
                    <div class="date" :class="{bold:!email.isRead}">{{date}}</div>
                </div>
            </router-link>
     </section>
                `,
    methods: {
        starred() {
            this.email.isStarred = !this.email.isStarred;
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
            return this.email.subject.substring(0, 80) + '...';
        },
    },
};

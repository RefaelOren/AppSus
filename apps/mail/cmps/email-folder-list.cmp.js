export default {
    template: `
        <section class="email-folder-list">
            <div @click="goTo('inbox')" class="inbox" :title="'Inbox'"><span class="fa-solid fa-inbox"></span></div>
            <div @click="goTo('starred')" class="starred" :title="'Starred'"><span class="fa-regular fa-star"></span></div>
            <div @click="goTo('sent')" class="sent" :title="'Sent'"><span class="fa-regular fa-paper-plane"></span></div>
            <div @click="goTo('draft')" class="draft" :title="'Draft'"><span  class="fa-regular fa-file"></span></div>
        </section>
    `,
    methods: {
        goTo(location) {
            this.$router.push(`/email/${location}`).then(() => {
                console.log(this.$route.params.filter);
            });
        },
    },
};

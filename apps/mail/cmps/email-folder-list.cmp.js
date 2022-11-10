export default {
    template: `
        <section class="email-folder-list">
            <div class="inbox" :title="'Inbox'"><span class="fa-solid fa-inbox"></span></div>
            <div class="starred" :title="'Starred'"><span class="fa-regular fa-star"></span></div>
            <div class="sent" :title="'Sent'"><span class="fa-regular fa-paper-plane"></span></div>
            <div class="draft" :title="'Draft'"><span  class="fa-regular fa-file"></span></div>
        </section>
    `,
};

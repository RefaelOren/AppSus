export default {
    template: `
        <section class="email-folder-list">
            <div class="inbox" :title="'Inbox'"><i class="fa-solid fa-inbox"></i></div>
            <div class="starred" :title="'Starred'"><i class="fa-regular fa-star"></i></div>
            <div class="sent" :title="'Sent'"><i class="fa-regular fa-paper-plane"></i></div>
            <div class="draft" :title="'Draft'"><i class="fa-regular fa-file"></i></div>
        </section>
    `,
};

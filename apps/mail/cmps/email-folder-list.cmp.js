export default {
    template: `
        <section class="email-folder-list">
            <div :title="'Inbox'" class="fa-solid fa-inbox inbox"></div>
            <div :title="'Starred'" class="fa-regular fa-star starred"></div>
            <div class="sent" :title="'Sent'"><i class="fa-regular fa-paper-plane"></i></div>
            <div class="draft" :title="'Draft'"><i class="fa-regular fa-file"></i></div>
        </section>
    `,
};

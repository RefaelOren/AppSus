export default {
    template: `
        <section class="email-folder-list">
            <div :title="'Inbox'"><i class="fa-solid fa-inbox"></i></div>
            <div :title="'Starred'"><i class="fa-regular fa-star"></i></div>
            <div :title="'Snoozed'"><i class="fa-regular fa-clock"></i></div>
            <div :title="'Sent'"><i class="fa-regular fa-paper-plane"></i></div>
            <div :title="'Draft'"><i class="fa-regular fa-file"></i></div>
        </section>
    `,
};

import notePreview from "./note-preview.cmp.js";

export default {
    template: `
        <section class="note-list">
            <h1>note list</h1>
            <note-preview />
        </section>
    `,
    components: {
		notePreview
	},
};
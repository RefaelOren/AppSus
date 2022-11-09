export default {
    props:['note'],
    template: `
        <section class="note note-txt">
            <h2>{{ note.info.txt }}</h2>
        </section>
    `,
    components: {
		
	},
};
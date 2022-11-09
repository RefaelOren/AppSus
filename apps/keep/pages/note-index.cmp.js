import noteDetails from './note-details.cmp.js'

import noteList from '../cmps/note-list.cmp.js'


export default {
    template: `
        <section class="note-index">
            <h1>note index</h1>
            <note-list />
            <note-details />
        </section>
    `,components: {
		noteList,
        noteDetails,
	},
};
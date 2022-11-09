import noteIndex from '../apps/keep/pages/note-index.cmp.js'

import noteFilter from '../apps/keep/cmps/note-filter.cmp.js'
import noteAdd from '../apps/keep/cmps/note-add.cmp.js'

export default {
    template: `
        <section class="app-note">
            <h1>app note</h1>
            <note-add />
            <note-filter />
            <note-index />
        </section>
    `,
    components: {
		noteIndex,
        noteFilter,
        noteAdd,
	},
};

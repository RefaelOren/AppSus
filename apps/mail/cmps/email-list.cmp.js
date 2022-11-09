import emailPreview from './email-preview.cmp.js';

export default {
    props: ['emails'],
    template: `
       <section class="email-list">
          <table>
                <tr v-for="email in emails" >
                    <router-link :to="'/email/'+ email.id">
                       <email-preview :email="email" /> 
                    </router-link>

                </tr>
            </table>
       </section>
    `,

    components: {
        emailPreview,
    },
};

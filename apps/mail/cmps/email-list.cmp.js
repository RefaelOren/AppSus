import emailPreview from './email-preview.cmp.js';

export default {
    props: ['emails'],
    template: `
       <section class="email-list">
          <table>
                <tr v-for="email in emails" >
                    <email-preview :email="email" /> 
                 </tr>
            </table>
       </section>
    `,

    components: {
        emailPreview,
    },
};

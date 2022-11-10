export default {
    template: `
       <section class="mail-compose"       >
             <span @click="isCompose = true" class="fa-solid fa-pen"></span>
       </section>
       <form class="compose" v-if="isCompose">
                 <div @click="isCompose=false">x</div>                
                 <input type="email" placeholder="From: email@email.com" />
                 <input type="email" placeholder="To: email@email.com"/>
                 <input type="text" placeholder="Subject..."/>
                 <input class="msg" type="text" placeholder="Message..." />
                 
                 <div class="send-btn">Send</div>
        </form>
    `,

    data() {
        return {
            isCompose: false,
        };
    },
};

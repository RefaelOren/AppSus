export default {
    template: `
        <header class="app-header">
            <div className="logo">
                <router-link  to="/">
                    <h1>AppSus</h1>
                </router-link>
                <img src="assets/img/logo.png" alt="" />
                </div>
            <nav class="links" :class="isShown">
                <router-link to="/"><span @click="isNavOpen=!isNavOpen">Home</span></router-link>
                <router-link to="/about"><span @click="isNavOpen=!isNavOpen">About</span></router-link>
                <router-link to="/email/inbox"><span @click="isNavOpen=!isNavOpen">Mail</span></router-link>
                <router-link to="/note"><span @click="isNavOpen=!isNavOpen">Keep</span></router-link>
            </nav>
            <button @click="isNavOpen=!isNavOpen" class="nav-btn-header"><i class="fa-solid fa-bars"></i></button>
        </header>
    `,

    data() {
        return {
            isNavOpen: false,
        };
    },
    computed: {
        isShown() {
            if (this.isNavOpen) return 'open';
            else return '';
        },
    },
};

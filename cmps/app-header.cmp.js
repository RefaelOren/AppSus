export default {
    template: `
        <header class="app-header">
            <div className="logo">
                <router-link  to="/">
                    <h1>AppSus</h1>
                </router-link>
                <img src="assets/img/logo.png" alt="" />
                </div>
            <nav class="links">
                <router-link to="/">Home</router-link>
                <router-link to="/about">About</router-link>
                <router-link to="/email/inbox">Mail</router-link>
                <router-link to="/note">Note</router-link>
            </nav>
        </header>
    `,
};

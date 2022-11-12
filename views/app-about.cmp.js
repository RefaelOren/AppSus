export default {
    template: `
        <section class="about-page">
            <h1 class="about">About Us</h1>
            <div className="section-center">
                <div>
                    <h1 class="mail-header">AppSus Mail</h1>
                    <router-link to="/email/inbox">
                        <img src="assets/img/mail.png" alt="" />
                    </router-link>
                    <h3>Connect to the world with our mail</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita nesciunt quaerat quibusdam error optio eveniet sit cum numquam quod suscipit!</p>
                </div>
                <div>
                    <h1 class="keep-header">AppSus Keep</h1>
                    <router-link to="/note">
                        <img src="assets/img/keep.png" alt="" />
                    </router-link>
                    <h3>Keep noted and never miss tasks</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus consequuntur cum dolorum eius commodi? Deleniti molestias commodi repudiandae delectus exercitationem!</p>
                </div>
                <div>
                    <h1 class="book-header">AppSus Books</h1>
                    <router-link to="/book">
                        <img src="assets/img/books.png" alt="" />
                    </router-link>
                    <h3>Enjoy our selection of top class books</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ex animi vel quam magnam eveniet laborum harum nihil quod nam?</p>
                </div>
            </div>
        </section>
    `,
};

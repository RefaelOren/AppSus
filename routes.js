import homePage from './views/app-home.cmp.js';
import aboutPage from './views/app-about.cmp.js';

import bookApp from './apps/Miss-Books/js/views/book-app.cmp.js';
import bookDetails from './apps/Miss-Books/js/views/book-details.cmp.js'
import emailDetails from './apps/mail/pages/email-details.cmp.js';
import mailApp from './apps/mail/pages/email-index.cmp.js';
import noteApp from './apps/keep/pages/note-index.cmp.js';
import emailList from './apps/mail/cmps/email-list.cmp.js';

const { createRouter, createWebHashHistory } = VueRouter;

const routerOptions = {
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: homePage,
        },
        {
            path: '/email',
            component: mailApp,
            children: [
                {
                    path: 'details/:id',
                    component: emailDetails,
                },
                {
                    path: `:filter`,
                    component: emailList,
                },
            ],
        },
        {
            path: '/note',
            component: noteApp,
        },
        {
            path: '/about',
            component: aboutPage,
        },
        {
            path: '/book',
            component: bookApp,
        },
        {
            path: '/book/:id',
            component: bookDetails,
        },
    ],
};

export const router = createRouter(routerOptions);

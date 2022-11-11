import homePage from './views/app-home.cmp.js';
import aboutPage from './views/app-about.cmp.js';

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
    ],
};

export const router = createRouter(routerOptions);

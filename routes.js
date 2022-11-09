import homePage from './views/app-home.cmp.js';
import aboutPage from './views/app-about.cmp.js';

import mailApp from './apps/mail/pages/mail-index.cmp.js';
import noteApp from './apps/keep/pages/note-index.cmp.js';

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

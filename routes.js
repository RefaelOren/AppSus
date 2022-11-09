import homePage from './views/app-home.cmp.js';
import aboutPage from './views/app-about.cmp.js';

import mailApp from './views/app-mail.cmp.js';
import noteApp from './views/app-note.cmp.js';

const { createRouter, createWebHashHistory } = VueRouter;

const routerOptions = {
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: homePage,
        },
        {
            path: '/mail',
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

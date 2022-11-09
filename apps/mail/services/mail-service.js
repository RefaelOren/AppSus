import { storageService } from '../../../services/async-storage.service.js';
import { utilService } from '../../../services/util.service.js';

const EMAIL_KEY = 'emailDB';

export const mailService = {
    query,
};

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Eranfi Appsus',
};
const emails = [
    {
        id: 'e101',
        subject:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.!',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.',
        isRead: false,
        sentAt: Date.now() - 100000000,
        from: 'momo@momo.com',
        to: 'user@appsus.com',
    },
    {
        id: 'e102',
        subject:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.',
        isRead: true,
        sentAt: Date.now() - 200000000,
        from: 'landowner@momo.com',
        to: 'user@appsus.com',
    },
    {
        id: 'e103',
        subject:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporiLorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.bus.',
        isRead: false,
        sentAt: Date.now() - 300000000,
        from: 'popo@momo.com',
        to: 'user@appsus.com',
    },
    {
        id: 'e104',
        subject:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.',
        isRead: true,
        sentAt: Date.now() - 400000000,
        from: 'linkedin@app.com',
        to: 'user@appsus.com',
    },
    {
        id: 'e105',
        subject:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.',
        isRead: false,
        sentAt: Date.now() - 500000000,
        from: 'gov-il@gov.com',
        to: 'user@appsus.com',
    },
    {
        id: 'e106',
        subject:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.',
        isRead: true,
        sentAt: Date.now() - 600000000,
        from: 'kuki@kuki.com',
        to: 'user@appsus.com',
    },
    {
        id: 'e107',
        subject:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.',
        isRead: true,
        sentAt: Date.now() - 700000000,
        from: 'facebook@app.com',
        to: 'user@appsus.com',
    },
    {
        id: 'e108',
        subject:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.',
        isRead: false,
        sentAt: Date.now() - 800000000,
        from: 'gitHub@desc.com',
        to: 'user@appsus.com',
    },
];

const criteria = {
    status: 'inbox/sent/trash/draft',
    txt: 'puki',
    isRead: true,
    isStared: true,
    lables: ['important', 'romantic'],
};

function query() {
    return storageService.query(EMAIL_KEY).then((email) => {
        if (!email || !email.length) {
            return storageService.put(EMAIL_KEY, emails);
        } else return email[0];
    });
}

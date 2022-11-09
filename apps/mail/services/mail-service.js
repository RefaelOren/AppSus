import { storageService } from '../../../services/async-storage.service.js';
import { utilService } from '../../../services/util.service.js';

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Eranfi Appsus',
};
const emails = [
    {
        id: 'e101',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        from: 'momo@momo.com',
        to: 'user@appsus.com',
    },
    {
        id: 'e102',
        subject: 'Reminder',
        body: 'Reminder to pay rent for the office',
        isRead: true,
        sentAt: 1551138030594,
        from: 'landowner@momo.com',
        to: 'user@appsus.com',
    },
    {
        id: 'e103',
        subject: 'Hey dude',
        body: 'Would love to meet you in our regular place',
        isRead: false,
        sentAt: 1551137030594,
        from: 'popo@momo.com',
        to: 'user@appsus.com',
    },
    {
        id: 'e104',
        subject: 'linkedin',
        body: 'You have 2 new messages, check it out',
        isRead: true,
        sentAt: 1551136030594,
        from: 'linkedin@app.com',
        to: 'user@appsus.com',
    },
    {
        id: 'e105',
        subject: 'Password',
        body: 'Your password was updated, please note us if something wrong',
        isRead: false,
        sentAt: 1551135030594,
        from: 'gov-il@gov.com',
        to: 'user@appsus.com',
    },
    {
        id: 'e106',
        subject: 'Hello papa!',
        body: 'I miss you a lot, when can we meet?',
        isRead: true,
        sentAt: 1551134030594,
        from: 'kuki@kuki.com',
        to: 'user@appsus.com',
    },
    {
        id: 'e107',
        subject: 'facebook',
        body: 'Please update your profile and come to see us soon',
        isRead: true,
        sentAt: 1551133030594,
        from: 'facebook@app.com',
        to: 'user@appsus.com',
    },
    {
        id: 'e108',
        subject: 'gitHub',
        body: 'A new features in our premium account ',
        isRead: false,
        sentAt: 1551132030594,
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

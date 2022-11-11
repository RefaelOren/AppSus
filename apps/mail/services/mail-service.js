import { storageService } from '../../../services/async-storage.service.js';
import { utilService } from '../../../services/util.service.js';

const EMAIL_KEY = 'emailDB';

export const mailService = {
    query,
    getById,
    getEmptyEmail,
    save,
};

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Eranfi Appsus',
};
const emails = [
    {
        id: 'e101',
        subject:
            'This email was intended for Refael Oren (Full stack Developer ✔️ Front end Developer ',
        body: '2022 LinkedIn Ireland Unlimited Company, Wilton Plaza, Wilton Place, Dublin 2. LinkedIn is a registered business name of LinkedIn Ireland Unlimited Company. LinkedIn and the LinkedIn logo are registered trademarks of LinkedIn.',
        isRead: false,
        sentAt: Date.now() - 100000000,
        from: 'momo@momo.com',
        to: 'user@appsus.com',
        isStarred: true,
    },
    {
        id: 'e102',
        subject:
            'Which engineering field should a college student stay away from because it will be de...? Which engineering field should a college student stay away from because it will be de...?',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.',
        isRead: true,
        sentAt: Date.now() - 200000000,
        from: 'landowner@momo.com',
        to: 'user@appsus.com',
        isStarred: false,
    },
    {
        id: 'e103',
        subject: `See Avivs and other peoples connections, experience, and more See Aviv's and other people's connections, experience, and more`,
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporiLorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.bus.',
        isRead: false,
        sentAt: Date.now() - 300000000,
        from: 'popo@momo.com',
        to: 'user@appsus.com',
        isStarred: false,
    },
    {
        id: 'e104',
        subject: `The free trial for's team has ended. Please log in and purchase a subscription within 14 days to keep working on your design projects. The free trial for רפי אורן's team has ended. Please log in and purchase a subscription within 14 days to keep working on your design projects.`,
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.',
        isRead: true,
        sentAt: Date.now() - 400000000,
        from: 'linkedin@app.com',
        to: 'user@appsus.com',
        isStarred: false,
    },
    {
        id: 'e105',
        subject:
            'Now people using your account can transfer a profile including recommendations, viewing history, My List, saved games, settings and more to their own membership that they pay for. We will never transfer your payment',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.',
        isRead: false,
        sentAt: Date.now() - 500000000,
        from: 'gov-il@gov.com',
        to: 'user@appsus.com',
        isStarred: false,
    },
    {
        id: 'e106',
        subject:
            'Great news! Profile Transfer is now fully enabled and available for other people using your account.Great news! Profile Transfer is now fully enabled and available for other people using your account.',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.',
        isRead: true,
        sentAt: Date.now() - 600000000,
        from: 'kuki@kuki.com',
        to: 'user@appsus.com',
        isStarred: true,
    },
    {
        id: 'e107',
        subject:
            'You are always in control of your account. Click here to turn off Profile Transfer, or you can also turn off Profile Transfer on the web by signing in to your account..',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.',
        isRead: true,
        sentAt: Date.now() - 700000000,
        from: 'facebook@app.com',
        to: 'user@appsus.com',
        isStarred: false,
    },
    {
        id: 'e108',
        subject:
            'We have created a unique set of editing and collaboration tools that seamlessly integrate with popular design software and develop',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.',
        isRead: false,
        sentAt: Date.now() - 800000000,
        from: 'gitHub@desc.com',
        to: 'user@appsus.com',
        isStarred: false,
    },
    {
        id: 'e109',
        subject:
            'Want to make your Prototypes look like the final product? Just export your Lottie animations from your LottieFiles account to your Figma or Adobe XD using its respective plugins.',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.',
        isRead: false,
        sentAt: Date.now() - 100000000,
        from: 'momo@momo.com',
        to: 'user@appsus.com',
        isStarred: false,
    },
    {
        id: 'e110',
        subject:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.',
        isRead: true,
        sentAt: Date.now() - 200000000,
        from: 'landowner@momo.com',
        to: 'user@appsus.com',
        isStarred: false,
    },
    {
        id: 'e112',
        subject:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporiLorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.bus.',
        isRead: false,
        sentAt: Date.now() - 300000000,
        from: 'popo@momo.com',
        to: 'user@appsus.com',
        isStarred: false,
    },
    {
        id: 'e113',
        subject:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.',
        isRead: true,
        sentAt: Date.now() - 400000000,
        from: 'linkedin@app.com',
        to: 'user@appsus.com',
        isStarred: true,
    },
    {
        id: 'e114',
        subject:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.',
        isRead: false,
        sentAt: Date.now() - 500000000,
        from: 'gov-il@gov.com',
        to: 'user@appsus.com',
        isStarred: false,
    },
    {
        id: 'e115',
        subject:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.',
        isRead: true,
        sentAt: Date.now() - 600000000,
        from: 'kuki@kuki.com',
        to: 'user@appsus.com',
        isStarred: false,
    },
    {
        id: 'e116',
        subject:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.',
        isRead: true,
        sentAt: Date.now() - 700000000,
        from: 'facebook@app.com',
        to: 'user@appsus.com',
        isStarred: false,
    },
    {
        id: 'e118',
        subject:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.',
        isRead: false,
        sentAt: Date.now() - 800000000,
        from: 'gitHub@desc.com',
        to: 'user@appsus.com',
        isStarred: false,
    },
    {
        id: 'e119',
        subject:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.',
        isRead: false,
        sentAt: Date.now() - 800000000,
        from: 'gitHub@desc.com',
        to: 'user@appsus.com',
        isStarred: false,
    },
    {
        id: 'e120',
        subject:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere, veritatis ad vitae dolore aliquam vel totam fuga quos temporibus.',
        isRead: true,
        sentAt: Date.now() - 800000000,
        from: 'gitHub@desc.com',
        to: 'user@appsus.com',
        isStarred: true,
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
            email = emails
            saveDemoData(EMAIL_KEY, emails);
        }
        return email
    });
}

function getById(emailId) {
    console.log(emailId);
    return storageService.get(EMAIL_KEY, emailId);
}

function getEmptyEmail() {
    return {
        id: '',
        from: '',
        to: '',
        subject: '',
        body: '',
        isRead: false,
        isStarred: false,
        sentAt: Date.now(),
    };
}

function save(email) {
    email.id = utilService.makeId();
    return storageService.post(EMAIL_KEY, email);
}

function saveDemoData(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

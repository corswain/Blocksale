import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        translate: 'NAV.DASHBOARD',
        type: 'item',
        icon: 'dashboard',
        url: '/dashboard'
    },
    {
        id: 'pages',
        title: 'Pages',
        translate: 'NAV.NAVIGATION',
        type: 'group',
        children: [
            {
                id: 'account',
                title: 'Account',
                translate: 'NAV.PAGE.ACCOUNT',
                type: 'item',
                icon: 'account_box',
                url: '/account'
            },
            {
                id: 'about',
                title: 'About',
                translate: 'NAV.PAGE.ABOUT',
                type: 'item',
                icon: 'info',
                url: '/about'
            },
            {
                id: 'faq',
                title: 'FAQ',
                translate: 'NAV.PAGE.FAQ',
                type: 'item',
                icon: 'help',
                url: '/faq'
            },
            {
                id: 'api',
                title: 'API',
                translate: 'NAV.PAGE.API',
                type: 'item',
                icon: 'code',
                url: '/api'
            },
            {
                id: 'support',
                title: 'Support',
                translate: 'NAV.PAGE.SUPPORT',
                type: 'item',
                icon: 'question_answer',
                url: '/support'
            }
        ]
    }
];

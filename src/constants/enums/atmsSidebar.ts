import { SvgIconName } from 'shared/ui/icons/model';

export const SIDEBAR_SECTIONS: [
    string,
    { icon: SvgIconName; name: string }[],
][] = [
    [
        'popular queries',
        [
            {
                icon: 'payment',
                name: 'payments',
            },
            {
                icon: 'loan',
                name: 'credits',
            },
            {
                icon: 'doubleArrow',
                name: 'transfers',
            },
            {
                icon: 'medicalServices',
                name: 'insurance',
            },
            {
                icon: 'showChart',
                name: 'investment',
            },
            {
                icon: 'deposit',
                name: 'saving',
            },
        ],
    ],

    [
        'work schedule',
        [
            {
                icon: 'calendar',
                name: 'all branches',
            },
            {
                icon: 'time',
                name: 'open now',
            },
        ],
    ],
    [
        'additionally',
        [
            {
                icon: 'question',
                name: 'consultation',
            },
            {
                icon: 'label',
                name: 'shares',
            },
            {
                icon: 'circleInside',
                name: 'people with hearing impairments are served',
            },
            {
                icon: 'people',
                name: 'vacancies',
            },
        ],
    ],
];

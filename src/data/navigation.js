export const topBarLinks = [
    { label: 'AISHE', href: '/documents/aishe.pdf', external: true },
    { label: 'Admission', href: '/admission' },
    { label: 'NAAC', href: '/naac' },
    { label: 'IQAC', href: '/iqac' },
    { label: 'Alumni Association', href: '/alumni-association' },
    { label: 'Initiatives', href: '/initiatives' },
    { label: 'RTI', href: '/documents/rti.pdf', external: true },
    { label: 'SSR', href: '/documents/ssr.pdf', external: true },
];

export const socialLinks = [
    { icon: 'Mail', href: '#' } // Replaced Google+
];

export const mainNavigation = [
    { label: 'Home', href: '/' },
    {
        label: 'About',
        href: '#',
        type: 'mega',
        columns: [
            {
                items: [
                    { label: 'Institution', href: '/about' },
                    { label: 'Management', href: '/management' },
                    { label: 'Secretary’s Desk', href: '/secretary' },
                    { label: 'Principal\'s Message', href: '/principal' },
                ]
            },
            {
                items: [
                    { label: 'Student Council', href: '/student-council' },
                    { label: 'Code of Conduct', href: '/documents/code-of-conduct.pdf', external: true },
                    { label: 'Organogram', href: '/organogram' },
                ]
            },
            {
                title: 'Committees',
                items: [
                    { label: 'Anti-Ragging', href: '/anti-ragging' },
                    { label: 'Grievance Redressal', href: '/grievance-redressal' },
                    { label: 'Women Harrasment Prevention', href: '/women-harrasment' },
                    { label: 'Code of Conduct Committee', href: '/documents/coc.pdf', external: true },
                ]
            },
            {
                items: [
                    { label: 'SC ST Cell', href: '/documents/sc-st.pdf', external: true },
                    { label: 'Minority Cell', href: '/documents/minority.pdf', external: true },
                    { label: 'OBC Cell', href: '/documents/backward.pdf', external: true },
                    { label: 'Placement Cell', href: '/documents/Annual-Placement-Report.pdf', external: true },
                ]
            }
        ]
    },
    {
        label: 'Academics',
        href: '#',
        type: 'dropdown',
        items: [
            { label: 'Syllabus', href: '/documents/syllabus.pdf', external: true },
            { label: 'Calendar of Events', href: '/documents/calendarofevents.pdf', external: true },
            { label: 'Results', href: '/documents/results.pdf', external: true },
        ]
    },
    {
        label: 'Faculty',
        href: '#',
        type: 'dropdown',
        items: [
            { label: 'Teaching', href: '/teaching' },
            { label: 'Non - Teaching', href: '/nonteaching' },
        ]
    },
    {
        label: 'Students',
        href: '/student',
    },
    {
        label: 'Attendance',
        href: '#',
        type: 'dropdown',
        items: [
            { label: 'Staff Attendance', href: '/documents/biometric.pdf', external: true },
            { label: 'Student Attendance', href: '/studentattendance' },
        ]
    },
    {
        label: 'Fees',
        href: '/documents/Fees structure-2024.pdf',
        external: true
    },
    {
        label: 'Infrastructure',
        href: '#',
        type: 'dropdown',
        items: [
            { label: 'Library', href: '/library' },
            { label: 'Computer Lab', href: '/computerlab' },
            { label: 'Psychology Lab', href: '/psychology' },
            { label: 'Physics Lab', href: '/physicslab' },
            { label: 'Chemistry Lab', href: '/chemistrylab' },
            { label: 'Biology Lab', href: '/biologylab' },
            { label: 'Playground', href: '/playground' },
        ]
    },
    {
        label: 'Activities',
        href: '#',
        type: 'dropdown',
        items: [
            { label: 'Science Club', href: '/scienceclub' },
            { label: 'Mathematics Club', href: '/mathematicsclub' },
            { label: 'Geography Club', href: '/geographyclub' },
            { label: 'History Club', href: '/historyclub' },
            { label: 'Literary Club', href: '/literaryclub' },
        ]
    },
    {
        label: 'Gallery',
        href: '#',
        type: 'dropdown',
        items: [
            { label: 'Photos', href: '/gallery' }
        ]
    },
    { label: 'News', href: '/news' },
    {
        label: 'Documents',
        href: '#',
        type: 'mega',
        columns: [
            {
                items: [
                    { label: 'NCTE Recognition Order', href: '/documents/ncte.pdf', external: true },
                    { label: 'Mandatory Disclosure', href: '/documents/md.pdf', external: true },
                    { label: 'NCTE Affidavit', href: '/documents/ncte-affidavit.pdf', external: true }
                ]
            },
            {
                items: [
                    { label: 'Grant - in - Aid Order - I', href: '/documents/first-grant-aid.pdf', external: true },
                    { label: 'Grant - in - Aid Order - II', href: '/documents/second-grant-aid.pdf', external: true },
                    { label: 'Permanent Affiliation Issued by Govt of Karnataka', href: '/documents/gok.pdf', external: true },
                    { label: 'Affiliation Issued by University of Mysore', href: '/documents/uom.pdf', external: true }
                ]
            },
            {
                items: [
                    { label: 'Balance Sheet', href: '/documents/balancesheet.pdf', external: true },
                    { label: 'Income Expenditure', href: '/documents/income.pdf', external: true },
                    { label: 'Receipt & Payment', href: '/documents/Audit2024.pdf', external: true },
                ]
            }
        ]
    },
    { label: 'Contact', href: '/contacts' }
];

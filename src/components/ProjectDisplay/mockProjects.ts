import {IProject} from './IProject';

export const mockProjects: IProject[] = [
    {
        title: 'Zebra Aurora',
        description: 'Machine Vision and Fixed Scanning Solution',
        definition: 'A desktop application used to provision and deploy machine vision jobs to a connected camera.',
        responsibility: 'I facilitated the transition from R&D prototype to full scale product. I owned and delivered over 20 major feature areas, most notably an undo/redo\n' +
            'engine for a PIXI.js canvas, built on a reactive RXJS architecture.',
        technologiesUsed: 'Electron, React (hooks), Context API, TypeScript, Node.js, RXJS',
        featuredImageUri: 'aurora_featured.jpg',
        thumbnailImageUri: 'zebra_aurora.png',
        resourceUrl: 'https://www.youtube.com/watch?v=_6Eenn8dWDY',
    },
    {
        title: 'Simpli Budget',
        description: 'A Budgeting Mobile App',
        definition: 'A cross platform mobile application used for tracking users spending. I couldn\'t find a minimalist budgeting app that existed and I wanted to learn a new technology, so I built Simpli Budget.',
        responsibility: 'I handled all aspects of development and deployment. I designed and implemented various user screens, a budgeting mechanism, user authentication, and the database.',
        technologiesUsed: 'Flutter, Google Cloud, Cloud Functions, FireStore, Firebase Auth, GitHub Actions',
        featuredImageUri: 'simpli_budget_featured.png',
        thumbnailImageUri: 'budget_thumb.jpg',
    },
    {
        title: 'EyeTemp',
        description: 'A Cross-Platform Mobile App',
        definition: 'An IoT device that can be placed on an appliance and alert users of temperature differentiations via a connected mobile application.',
        responsibility: 'I implemented bug fixes and features, including a deep linking solution for two step verification on the cross-platform mobile application. I also acted as the release manager, owning' +
            ' deployments the the Apple App Store and Google Play Store.',
        technologiesUsed: 'React Native, Redux, Postgres',
        featuredImageUri: 'eye_temp_featured.jpg',
        thumbnailImageUri: 'eye_temp_thumb.jpg',
        resourceUrl: 'https://intelligentproduct.solutions/work/eyetemp-heat-sensor-monitor/',
    },
    {
        title: 'Conquer Money',
        description: 'A Financial Guidance Platform',
        definition: 'A cross platform mobile application used to help users manage their money and seek financial guidance.',
        responsibility: 'A web application already existed when I came into the project. The stakeholder wanted a quick mobile app prototype to excite investors and raise money. I built the mobile app, which displays the site in a WebView, built a communication bridge from Flutter to React, and implemented local notifications.',
        technologiesUsed: 'Flutter, React, JavaScript',
        featuredImageUri: 'conquer_money_featured.jpg',
        thumbnailImageUri: 'conquer_money_thumb.jpg',
        resourceUrl: 'https://www.conquer.money/',
    },
    {
        title: 'Age By Planet',
        description: 'Multi-Planetary Web App Utility',
        definition: 'A web app used to determine a user\'s age on different planets.',
        responsibility: 'I created this web app out of my daughter\'s love for planets. This app was bootstrapped from create-react-app and utilized GitHub actions for CI/CD. ' +
            'It uses the orbital period of each of the planets in our solar system to calculate a user\'s age on each planet.',
        technologiesUsed: 'React, TypeScript, Google Cloud, GitHub Actions',
        featuredImageUri: 'age_by_planet_featured.png',
        thumbnailImageUri: 'age_by_planet_thumb.png',
        resourceUrl: 'https://age-by-planet.web.app/',
        sourceControlUrl: 'https://github.com/mattrusso9037/age_by_planet',
    },
    {
        title: 'Fitbit Watch Face',
        description: 'A Minimalist, Metric-Happy Watch Face',
        definition: 'A watch face built for the Fitbit platform. It allows users to toggle between heart rate, steps, move minutes and other metrics.',
        responsibility: 'I handled all aspects of development. Utilizing Fitbit sensor API, I registered listeners efficiently and effectively. This required a delicate balance between metric accuracy and battery life.',
        technologiesUsed: 'Fitbit Studio, React, Fitbit Sensor API, JavaScript',
        featuredImageUri: 'watchface_thumb.png',
        thumbnailImageUri: 'watchface_thumb.png',
        sourceControlUrl: 'https://github.com/mattrusso9037/minimal_stat_watchface',
    },

];

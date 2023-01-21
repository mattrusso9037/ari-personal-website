import {IProject} from './IProject';
import {Aurora} from "./Views/Aurora";
import React from "react";

export const mockProjects: IProject[] = [
    {
        title: 'Listen To The Angels',
        description: 'Machine Vision and Fixed Scanning Solution',
        fullDescription: 'Zebra Aurora is a desktop application used to provision and deploy machine vision jobs to a connected camera. I facilitated the transition from R&D prototype to full scale product. I owned and delivered over 20 major feature areas, most notably an undo/redo\n' +
            'engine for a PIXI.js canvas, built on a reactive RXJS architecture.',
        technologiesUsed: ['Electron', 'React', 'Context API', 'TypeScript', 'Node.js', 'RXJS'],
        featuredImageUri: 'ltta_tile.png',
        thumbnailImageUri: 'ltta_tile.png',
        resourceUrl: 'https://www.youtube.com/watch?v=_6Eenn8dWDY',
        view: <Aurora />
    },
    {
        title: 'Simpli Budget',
        description: 'A Cross-Platform Mobile App',
        fullDescription: 'EyeTemp is an IoT device that can be placed on an appliance and ' +
            'alert users of temperature differentiations via a connected mobile application. I implemented ' +
            'bug fixes and features, including a deep linking solution for two step verification on the cross-platform mobile application. I also acted as the release manager, owning' +
            ' deployments to the Apple App Store and Google Play Store.',
        technologiesUsed:[ 'React Native', 'Redux', 'Postgres'],
        featuredImageUri: 'eye_temp_featured.jpg',
        thumbnailImageUri: 'simplibudget_tile.png',
        resourceUrl: 'https://intelligentproduct.solutions/work/eyetemp-heat-sensor-monitor/',
    },
    {
        title: 'TheatreSnax',
        description: 'A Financial Guidance Platform',
        fullDescription: 'Conquer Money is a cross platform mobile application used to help users manage their money and seek financial guidance. ' +
            'A web application already existed when I came into the project. The stakeholder wanted a quick mobile app prototype to excite investors and raise money. ' +
            'I built the mobile app, which displays the site in a WebView, built a communication bridge from Flutter to React, and implemented local notifications.',
        technologiesUsed: ['Flutter', 'React', 'JavaScript'],
        featuredImageUri: 'conquer_money_featured.jpg',
        thumbnailImageUri: 'theatresnax_tile.png',
        resourceUrl: 'https://www.conquer.money/',
    },
    {
        title: 'InvenTracker',
        description: 'A Budgeting Mobile App',
        fullDescription: 'Simpli Budget is a cross platform mobile application used for tracking users spending. I couldn\'t find a minimalist ' +
            'budgeting app that existed and I wanted to learn a new technology, so I built Simpli Budget. I handled all aspects of development and deployment. I designed and implemented various user screens, a budgeting mechanism, user authentication, and the database.',
        technologiesUsed: ['Flutter', 'Google Cloud', 'Cloud Functions', 'FireStore', 'Firebase Auth', 'GitHub Actions'],
        featuredImageUri: 'simpli_budget_featured.png',
        thumbnailImageUri: 'inventracker_tile.png',
    },
    {
        title: 'Personal Dashboard',
        description: 'Multi-Planetary Web App Utility',
        fullDescription: 'Age By Planet is a web app used to determine a user\'s age on different planets. ' +
            'I created this web app out of my daughter\'s love for planets. This app was bootstrapped ' +
            'from create-react-app and utilized GitHub actions for CI/CD. ' +
            'It uses the orbital period of each of the planets in our solar system to calculate a user\'s age on each planet.',
        technologiesUsed: ['React', 'TypeScript', 'Google Cloud', 'GitHub Actions'],
        featuredImageUri: 'age_by_planet_featured.png',
        thumbnailImageUri: 'dash_tile.png',
        resourceUrl: 'https://age-by-planet.web.app/',
        sourceControlUrl: 'https://github.com/mattrusso9037/age_by_planet',
    },
    {
        title: 'NeighborLynk',
        description: 'A Minimalist, Metric-Happy Watch Face',
        fullDescription: 'A watch face built for the Fitbit platform. It allows users to toggle between heart rate, ' +
            'steps, move minutes and other metrics. I handled all aspects of development. Utilizing Fitbit sensor API, I registered listeners efficiently and effectively. ' +
            'This required a delicate balance between metric accuracy and battery life.',
        technologiesUsed: ['Fitbit Studio', 'React', 'Fitbit Sensor API', 'JavaScript'],
        featuredImageUri: 'watchface_thumb.png',
        thumbnailImageUri: 'neighborlynk_tile.png',
        sourceControlUrl: 'https://github.com/mattrusso9037/minimal_stat_watchface',
    },
];

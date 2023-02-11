import { IProject } from './IProject';
import { Aurora } from "./Views/Aurora";
import React from "react";

enum SectionTitle {
    RESEARCH_METHODOLOGY = 'Research Methodology',
    RESEARCH_FINDINGS = 'Research Findings',
    DESIGN_SOLUTION = 'Design Solution',
    CONCLUSION = 'Conclustion: What I Learned & Next Steps',
    PROJECT_OVERVIEW = 'Project Overview',
    PROBLEM_STATEMENT = 'Problem Statement',
    GOALS = 'Goals',
    TARGET_USERS = 'Target Users',
    INITIAL_DESIGN_CONCEPTS = 'Initial Design Concepts',
    CHALLENGES_AND_CONSTRAINTS = 'Challenges & Constraints'
}

enum Technology {
    FIGMA = 'Figma',
    GOOGLE_JAMBOARD = 'Google Jamboard',
    WORDPRESS = 'WordPress'
}

export const projects: IProject[] = [
    {
        title: 'InvenTracker',
        description: 'Inventory Tracking App',
        technologiesUsed: [Technology.FIGMA, Technology.GOOGLE_JAMBOARD],
        sections: [
            {
                title: SectionTitle.PROJECT_OVERVIEW,
                content: 'The goal of this project is to design and develop a mobile app for restaurants to track their ingredient inventory and generate reports for easy ordering from suppliers. The app will be designed to be user-friendly, efficient, and flexible, allowing restaurant management and staff to convert their inventory process with ease.'
            },
            {
                title: SectionTitle.PROBLEM_STATEMENT,
                content: 'Restaurants often struggle with keeping accurate track of their ingredient inventory, which can lead to waste, overspending, and reduced profits. In addition, manual tracking methods are time-consuming and error-prone, and it can be difficult to generate reports for accurately ordering necessary ingredients from suppliers.'
            },
            {
                title: SectionTitle.GOALS,
                content: 'To provide restaurants with a simple and accurate way to track their ingredient inventory that everyone can use.\nTo generate reports that make it easy for restaurants to order ingredients from suppliers when they are running low. \nTo reduce waste, overspending, and improve the bottom line by ensuring that restaurants have the ingredients they need, when they need them.'
            },
            {
                title: SectionTitle.TARGET_USERS,
                content: 'The target users of the app are restaurant managers, chefs, and kitchen staff who are responsible for tracking and managing the ingredient inventory. These users may range in technical proficiency, but they all share the goal of managing the restaurant\'s ingredient inventory efficiently and accurately.'
            },
            {
                title: SectionTitle.INITIAL_DESIGN_CONCEPTS,
                images: []
            },
            {
                title: SectionTitle.RESEARCH_METHODOLOGY,
                content: 'To better understand the needs and expectations of our target users, we conducted in-depth interviews with 20 restaurant managers, chefs, and kitchen staff. The interviews covered topics such as their current ingredient tracking methods, their biggest pain points with tracking inventory, and their desired features in an inventory tracking app.'
            },
            {
                title: SectionTitle.RESEARCH_FINDINGS,
                content: 'Most restaurants currently use manual methods to track their ingredient inventory, such as writing down inventory levels on paper or using spreadsheet software. \nThe biggest pain points with manual tracking methods include errors in inventory levels, difficulties in generating reports for ordering ingredients, and time-consuming manual updates. \nThe majority of restaurants desired a mobile app that was user-friendly, flexible, and that allowed them to track their ingredient inventory in real-time.'
            },
            {
                title: SectionTitle.DESIGN_SOLUTION,
                content: 'Based on our research, we designed a mobile app for restaurants to track their ingredient inventory and generate reports for ordering ingredients from suppliers. The app features an intuitive interface that allows restaurants to easily update their inventory levels and generate reports with just a few taps. \nThe app also integrates with the restaurant\'s existing suppliers, making it easy for restaurants to order ingredients when they are running low. In addition, the app provides real-time inventory updates, so that restaurants always know how much of each ingredient they have on hand.'
            },
            {
                title: SectionTitle.CONCLUSION,
                content: 'InvenTracker provides an efficient and accurate solution for restaurants to manage ingredient inventory. The app has been well-received by our target users, who appreciate the ease and flexibility of tracking their inventory and ordering ingredients from suppliers. The app has also helped restaurants reduce waste, overspending, and improve their bottom line by ensuring that they always have the ingredients they need, when they need them.'
            },
            {
                images: []
            }
        ],
        // image on top
        featuredImageUri: 'inventracker_tile.png',
        // tile
        thumbnailImageUri: 'inventracker_tile.png',
    },
    {
        title: 'Listen to the Angels',
        description: 'Responsive Website',
        technologiesUsed: [Technology.FIGMA, Technology.WORDPRESS],
        sections: [
            {
                title: SectionTitle.PROJECT_OVERVIEW,
                content: 'I was given the opportunity to design a responsive website for desktop and mobile using Figma for a new local nonprofit agency that supports individuals and families impacted by domestic violence. The goal of this project was to work alongside a team of 2 software developers to create a simple and easy to navigate website and have it ready to launch in time for the agency’s first event (within a 4 month period).'
            },
            {
                title: SectionTitle.GOALS + ' & ' + SectionTitle.TARGET_USERS,
                content: 'This website was a necessary part of outreach, providing support and resources and fundraising for Listen to the Angels, Inc, a local nonprofit supporting individuals and families impacted by domestic violence.'
            },
            {
                title: SectionTitle.CHALLENGES_AND_CONSTRAINTS,
                content: 'There were a few challenges as far as having the designs translate to WordPress and working with the developers to communicate why certain aspects of the design were necessary for a minimum viable product. For example, the emergency exit button was difficult to implement in the website but I was able to provide insight on why this feature was a necessary part of the website.'
            },
            {
                title: SectionTitle.INITIAL_DESIGN_CONCEPTS,
                content: 'I looked into various nonprofit agency websites as part of a competitive audit, including others that support survivors of domestic violence,  to decide what features and information would be important to include in this design. The stakeholders provided a requirements list and a “nice to have” list that I was able to reference to be sure we included everything they were looking for, and provided insight on what features may work best from an accessibility point of view.',
                images: ['ltta/idc_1.png', 'ltta/idc_2.png', 'ltta/idc_3.png']
            },
            {
                title: SectionTitle.RESEARCH_FINDINGS,
                content: 'While a structured usability study was not conducted for this particular project, I used my findings from my competitive audit to drive my design decisions.'
            },
            {
                title: SectionTitle.TARGET_USERS,
                content: 'The target users of the app are restaurant managers, chefs, and kitchen staff who are responsible for tracking and managing the ingredient inventory. These users may range in technical proficiency, but they all share the goal of managing the restaurant\'s ingredient inventory efficiently and accurately.'
            },
            {
                title: SectionTitle.DESIGN_SOLUTION,
                content: 'Based on our research, we designed a mobile app for restaurants to track their ingredient inventory and generate reports for ordering ingredients from suppliers. The app features an intuitive interface that allows restaurants to easily update their inventory levels and generate reports with just a few taps. \nThe app also integrates with the restaurant\'s existing suppliers, making it easy for restaurants to order ingredients when they are running low. In addition, the app provides real-time inventory updates, so that restaurants always know how much of each ingredient they have on hand.'
            },
            {
                title: SectionTitle.CONCLUSION,
                content: 'I had the opportunity to learn a lot more about what Figma has to offer outside of the UX Design certification course and apply what I had learned to a professional opportunity. I also learned more about accessibility, especially when your users may be in a dangerous situation, and what you can and should do to make an effort to keep them safe, including an emergency exit button. We continue to iterate and improve the design of the website over time, taking user feedback and updated design principles into account.'
            },
            {
                content: <div>
                    <div>You can visit Listen to the Angels' website here!</div>
                    <a target='blank' href='https://listentotheangels.org'>listentotheangels.org</a>
                </div>,

            },

        ],
        // image on top
        featuredImageUri: 'ltta/featured.png',
        // tile
        thumbnailImageUri: 'ltta_tile.png',
    },
    {
        title: 'SimpliBudget',
        description: 'Mobile App Redesign',
        technologiesUsed: [Technology.FIGMA],
        // image on top
        featuredImageUri: 'simplibudget/featured_1_4x.png',
        // tile
        thumbnailImageUri: 'simplibudget_tile.png',
        sections: [
            {
                title: SectionTitle.PROJECT_OVERVIEW,
                content: 'I redesigned an existing app used for monthly budgeting. The app was originally designed using Flutter components by a developer. Over the year or so using the app myself, I recognized various pain points in the design, including accessibility limitations, and decided to give it a new look and feel. I used Figma to take the original design and revamp it to make it more user friendly, visually appealing and accessible. I worked alongside a software developer to discuss design changes and implement them in the app.'
            },
            {
                title: SectionTitle.GOALS + ' & ' + SectionTitle.TARGET_USERS,
                content: 'The goal of the SimpliBudget app is to provide an easy-to-use tool to keep track of monthly spending and/or saving. There is no specific target audience - this app is designed for those interested in taking control of their money on a monthly basis and improve spending habits. It is available for all ages.',
                images: ['simplibudget/featured_2_4x.png']
            },
            {
                title: SectionTitle.CHALLENGES_AND_CONSTRAINTS,
                content: 'TBD'
            },
            {
                title: SectionTitle.RESEARCH_FINDINGS,
                content: 'While a structured usability study was not conducted for this particular project, we were able to ask for feedback from users we tasked with testing the app as it was available in the app store. Some feedback we received was...'
            },
            {
                title: SectionTitle.CONCLUSION,
                content: 'TBD',
            },
            {
                images: ['simplibudget/ns_1.png', 'simplibudget/ns_2.png', 'simplibudget/ns_3.png', 'simplibudget/ns_4.png']
            },
            {
                title: 'Original Designs',
                images: ['simplibudget/og_1.png', 'simplibudget/og_2.png', 'simplibudget/og_3.png', 'simplibudget/og_4.png']
            }
        ],
    },
];

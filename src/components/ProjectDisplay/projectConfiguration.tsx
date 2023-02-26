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
    WORDPRESS = 'WordPress',
    ADOBEXD = 'Adobe xD'
}

export const projects: IProject[] = [
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
                images: ['ltta/ltta_id_1_1x.webp', 'ltta/ltta_id_2_1x.webp', 'ltta/ltta_id_3_1x.webp']
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
                images: ['ltta/featured_3_1x.webp', 'ltta/featured_4_1x.webp']
            },

        ],
        // image on top
        featuredImageUri: 'ltta/featured_1x.webp',
        // tile
        thumbnailImageUri: 'ltta_tile.webp',
    },
    {
        title: 'SimpliBudget',
        description: 'Mobile App Redesign',
        technologiesUsed: [Technology.FIGMA],
        // image on top
        featuredImageUri: 'simplibudget/featured_1_1x.webp',
        // tile
        thumbnailImageUri: 'simplibudget_tile.webp',
        sections: [
            {
                title: SectionTitle.PROJECT_OVERVIEW,
                content: 'I redesigned an existing app used for monthly budgeting. The app was originally designed using Flutter components by a developer. Over the year or so using the app myself, I recognized various pain points in the design, including accessibility limitations, and decided to give it a new look and feel. I used Figma to take the original design and revamp it to make it more user friendly, visually appealing and accessible. I worked alongside a software developer to discuss design changes and implement them in the app.'
            },
            {
                title: SectionTitle.GOALS + ' & ' + SectionTitle.TARGET_USERS,
                content: 'The goal of the SimpliBudget app is to provide an easy-to-use tool to keep track of monthly spending and/or saving. There is no specific target audience - this app is designed for those interested in taking control of their money on a monthly basis and improve spending habits. It is available for all ages.',
                images: ['simplibudget/featured_2_1x.webp']
            },
            {
                title: SectionTitle.CHALLENGES_AND_CONSTRAINTS,
                content: 'There weren\'t many challenges with this project, although I did find it challenging to redesign the category cards with the progress bar. I felt that the original design was helpful but also wanted to utilize the card space in the most efficient way to create a quick overview of a category\'s status without overwhelming the user (and the available space) with too much information. Above you will see different versions of the card I considered.'
            },
            {
                title: SectionTitle.RESEARCH_FINDINGS,
                content: 'While a structured usability study was not conducted for this particular project, we were able to ask for feedback from users we tasked with testing the app as it was available in the app store. Some feedback we received was...'
            },
            {
                title: SectionTitle.CONCLUSION,
                content: 'Throughout the redesign process, I learned how to take an existing application and improve its design and user experience. I was able to make the components more simple and easy to read, and the application overall easier to navigate. I would like to continue to improve the application experience by developing insights from user feedback and iterating on the design.',
            },
            {
                images: ['simplibudget/ns_grouped_1_1x.webp', ]
            },
            {
                title: 'Original Designs',
                images: ['simplibudget/ns_grouped_2_1x.webp']
            }
        ],
    },
    {
        title: 'Theater Snax',
        description: 'Snack Ordering Responsive Web App',
        technologiesUsed: [Technology.ADOBEXD],
        // image on top
        featuredImageUri: 'theatresnax/featured_1_1x.webp',
        // tile
        thumbnailImageUri: 'theatresnax_tile.webp',
        sections: [
            {
                title: SectionTitle.PROJECT_OVERVIEW,
                content: 'The goal of this project is to design and develop a responsive website that allows movie theater customers to order snacks from their seats, based on a prompt using Sharpen. The website will be integrated with the theater\'s existing point-of-sale (POS) system to ensure seamless and efficient order processing, complete with real-time delivery tracking.'
            },
            {
                title: SectionTitle.PROBLEM_STATEMENT,
                content: 'Movie theaters often struggle with long lines and delays at the snack counter, which can negatively impact the customer experience. In addition, customers may have trouble finding the snack they want or may miss out on their preferred snack due to long wait times. Movie buffs often find themselves missing key parts of a movie to get snacks due to arriving at the theater late, long lines, etc. They need a way to order snacks ahead of time or while in the theater and have their order delivered to their seat.'
            },
            {
                title: SectionTitle.GOALS,
                content: 'To streamline the snack ordering process and reduce wait times for customers, to provide customers with an easy-to-use interface for ordering and paying for snacks, and to improve the overall customer experience by providing customers with a convenient and hassle-free way to order snacks from their seats.',
            },
            {
                title: SectionTitle.TARGET_USERS,
                content: 'The target users of the website are movie theater customers who want to order snacks from their seats. These customers may range in age and technical proficiency, but they all share the desire for a quick and convenient way to order snacks.'
            },
            {
                title: SectionTitle.CHALLENGES_AND_CONSTRAINTS,
                content: 'The challenges faced with this project included being unfamiliar with Adobe xD and designing my first responsive web application using the progressive enhancement approach. I was able to learn and adjust to the differences between this tool and Figma throughout this project and found myself favoring some of its unique features, including the repeat grid. I also learned the many aspects involved in progressive enhancement as I worked through this design process.'
            },
            {
                title: SectionTitle.INITIAL_DESIGN_CONCEPTS,
                images: ['theatresnax/id_1.webp', 'theatresnax/id_2.webp', 'theatresnax/id_3.webp', 'theatresnax/id_4.webp']
            },
            {
                title: SectionTitle.RESEARCH_METHODOLOGY,
                content: 'To better understand the needs and expectations of our target users, we conducted a survey of 5 movie theater regulars who interacted with our low-fidelity prototype. Using an unmoderated usability study, the participants were asked to complete a series of tasks, answer follow-up questions and then complete a system usability scale consisting of 10 questions.'
            },
            {
                title: SectionTitle.RESEARCH_FINDINGS,
                content: 'Feedback from the usability study was organized and analyzed to develop themes and insights. Most participants reported that there were some inconsistencies with button locations and styles. They also indicated that the user flow was a bit unclear and some navigation cues were missing. Designs were iterated on based on these results.'
            },
            {
                title: SectionTitle.DESIGN_SOLUTION,
                content: 'Based on our research, we designed a responsive website that allows customers to order snacks from their seats. The website features a simple and intuitive interface that allows customers to easily select their preferred snack items and pay for their order using their credit or debit cards. The website also integrates with the theater\'s existing POS system, so that orders can be processed quickly and efficiently. To further improve the customer experience, the website provides real-time updates on the status of the customer\'s order, so they know when their snacks will be delivered to their seats.'
            },
            {
                title: SectionTitle.CONCLUSION,
                content: 'MovieSnax addresses the pain points of the current ordering process and provides a more convenient and efficient solution for customers. Participants in the usability studies found TheaterSnax easy to navigate and could see themselves using the app regularly to simplify and destress their movie-going experience. Throughout the design process for this project, I learned more about the steps required to design efficiently and effectively using Adobe xD. I also learned visual design standards and the importance of accessibility features that make use of products or apps easier for all users. I would love to continue to test this design with users to further improve the user journey and address any additional pain points that may come up.'
            },
            {
                images: ['theatresnax/ns_grouped_1_1x.webp', 'theatresnax/featured_3_1x.webp', 'theatresnax/featured_4_1x.webp', 'theatresnax/featured_5_1x.webp', 'theatresnax/featured_6_1x.webp']
            }
        ],
    },
    {
        title: 'InvenTracker',
        description: 'Inventory Tracking App',
        technologiesUsed: [Technology.FIGMA, Technology.GOOGLE_JAMBOARD],
        // image on top
        featuredImageUri: 'inventracker/featured_1_1x.webp',
        // tile
        thumbnailImageUri: 'inventracker_tile.webp',
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
                images: ['inventracker/id_1_1x.webp', 'inventracker/id_2_1x_grouped.webp']
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
        ],
    },
    {
        title: 'NeighborLynk',
        description: 'Neighborhood Watch Web App',
        technologiesUsed: [Technology.FIGMA],
        // image on top
        featuredImageUri: 'neighborlynk/featured_1_1x.webp',
        // tile
        thumbnailImageUri: 'neighborlynk_tile.webp',
        sections: [
            {
                title: SectionTitle.PROJECT_OVERVIEW,
                content: 'The goal of this project is to design and develop a responsive web app that connects users in a neighborhood to their surrounding neighbors, in an effort to keep neighborhoods safer. The app will allow users to submit alerts for recent activity such as auto collisions, structure fires, and violent altercations, and will provide real-time notifications to users in the affected area.'
            },
            {
                title: SectionTitle.PROBLEM_STATEMENT,
                content: 'Neighborhoods are often plagued by crime and safety concerns, and residents often feel isolated and powerless to address these issues. Despite the efforts of law enforcement, it can be difficult for residents to stay informed about crime and safety threats in their area. Residents also want to feel more involved and connected to others in their neighborhoods in order to provide assistance to those in need and organize events to create a sense of community.'
            },
            {
                title: SectionTitle.GOALS,
                content: 'To provide residents with a way to stay informed about crime and safety threats in their neighborhood, to connect residents with their surrounding neighbors to create a sense of community and increase safety, and to empower residents to report crime and safety incidents and provide real-time notifications to users in the affected area.',
            },
            {
                title: SectionTitle.TARGET_USERS,
                content: 'The target users of the app are residents of a neighborhood who are interested in staying informed about crime and safety threats in their area and connecting with their surrounding neighbors. These users may range in age and technical proficiency, but they all share a concern for the safety and security of their neighborhood.',
            },
            {
                title: SectionTitle.CHALLENGES_AND_CONSTRAINTS,
                content: 'One of the biggest challenges I faced while designing NeighborLynk was finding a way to incorporate useful features without losing sight of the overall goal of the app- to keep users informed and safe within their neighborhood. I had many ideas for what to include, but ultimately decided to choose a few of those ideas in order to keep the app easy to use and avoid overwhelming the users with too much to navigate. I did find there were many gaps in current available products that I was able to provide solutions for within my design.'
            },
            {
                title: SectionTitle.RESEARCH_METHODOLOGY,
                content: 'To better understand the needs and expectations of our target users, we conducted in-depth interviews with 20 residents of various neighborhoods. The interviews covered topics such as their current methods for staying informed about crime and safety threats, their concerns about crime and safety in their neighborhood, and their desired features in a neighborhood watch app.',
            },
            {
                title: SectionTitle.INITIAL_DESIGN_CONCEPTS,
                images: ['neighborlynk/id_1_1x.webp']
            },
            {
                title: SectionTitle.RESEARCH_FINDINGS,
                content: 'Most residents currently rely on traditional news sources and word of mouth to stay informed about crime and safety threats in their neighborhood. Residents expressed a desire for a more direct and real-time method of staying informed about crime and safety threats in their area. Residents also expressed a desire for a sense of community and a way to connect with their surrounding neighbors to increase safety in their neighborhood.',
            },
            {
                title: SectionTitle.DESIGN_SOLUTION,
                content: 'Based on our research, we designed a responsive web app that connects residents in a neighborhood to their surrounding neighbors and provides real-time notifications about crime and safety incidents. The app features an intuitive interface that allows residents to easily submit alerts for recent activity, and provides real-time notifications to users in the affected area. The app also includes a community section where residents can connect with each other, share information and best practices, and participate in community events and initiatives. The community section helps to create a sense of community and increase safety in the neighborhood.',
            },
            {
                title: SectionTitle.CONCLUSION,
                content: 'NeighborLynk provides residents with a way to stay informed about crime and safety threats in their area and connect with their surrounding neighbors. The app has been well-received by our target users, who appreciate the real-time notifications and the sense of community that the app provides. The app has helped to increase safety and security in neighborhoods, and has empowered residents to take an active role in ensuring the safety of their community.'
            },
            {
                images: ['neighborlynk/featured_2_1x.webp', 'neighborlynk/featured_3_1x.webp', 'neighborlynk/featured_4_1x.webp']
            }
        ],
    },
    {
        title: 'Personal Dashboard',
        description: 'Auto Rotating Tablet Interface',
        technologiesUsed: [Technology.FIGMA],
        // image on top
        featuredImageUri: 'dashboard/featured_1_2x.webp',
        // tile
        thumbnailImageUri: 'dash_tile.webp',
        sections: [
            {
                title: SectionTitle.PROJECT_OVERVIEW,
                content: 'The goal of this project is to design and develop a responsive website that allows movie theater customers to order snacks from their seats, based on a prompt using Sharpen. The website will be integrated with the theater\'s existing point-of-sale (POS) system to ensure seamless and efficient order processing, complete with real-time delivery tracking.'
            },
            {
                title: SectionTitle.PROBLEM_STATEMENT,
                content: 'Busy individuals often struggle to organize all of the important information they need in a simple and concise manner with little effort. Spending time gathering information from various apps to put everything together in one place, such as a physical planner or an app, makes it difficult to focus on other tasks at hand.'
            },
            {
                title: SectionTitle.GOALS + ' & ' + SectionTitle.TARGET_USERS,
                content: 'The goal of this user interface is to have all of the user’s daily relevant information readily available in a simple and sleek dashboard. The target users would be busy professionals who have a lot going on throughout the day and are looking for a simple way to have it all in front of them in one space.',
            },
            {
                title: SectionTitle.CONCLUSION,
                content: 'I used this side project to explore and learn more about Figma and the many features it offers. I also explored many aspects of accessibility while designing this interface.'
            },
            {
                images: ['dashboard/featured_2_4x.webp']
            }
        ],
    },

];

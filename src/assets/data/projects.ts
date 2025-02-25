import { Project, PROJECT_TYPE, RESOURCE_TYPE } from 'src/app/models/project.model';

export const projects: Project[] = [
    {
        id: 1,
        name: 'Notes management web application',
        type: PROJECT_TYPE.ACADEMIC,
        description: `
        Web application development for notes management and share
        with a chat using Node.js and Socket.io..
        `,
        keywords: ['PHP', 'HTML', 'CSS', 'Node.js', 'MySQL', 'MVC architecture', 'Socket.io'],
        resources: [],
        participants: 1,
        experienceId: 2
    },
    {
        id: 2,
        name: 'Kindergarten management web application',
        type: PROJECT_TYPE.ACADEMIC,
        description: `
        Web application development that meets the management needs of a kindergarten.
(users, events, documents, calendar, services, contracts)
        `,
        keywords: ['CodeIgniter', 'PHP', 'MySQL', 'phpMyAdmin', 'SVN', 'Doxygen', 'MVC architecture'],
        resources: [],
        participants: 4,
        experienceId: 2
    },
    {
        id: 3,
        name: 'E-store web application',
        type: PROJECT_TYPE.ACADEMIC,
        description: `
        Candy store (Sign in, sign up, products list, shopping cart, orders, payment)
        `,
        keywords: ['HTML', 'CSS', 'JQuery', 'SMARTY', 'PROPEL', 'Slim', 'Cloud9', 'PHP', 'MySQL'],
        resources: [{
            name: 'Bonbostore',
            src: 'assets/images/bonbostore.jpg',
            type: RESOURCE_TYPE.IMG
        }],
        participants: 2,
        experienceId: 1
    },
    {
        id: 4,
        name: 'Non-responsive to responsive website',
        type: PROJECT_TYPE.PRO,
        description: `
        Update a non responsive website to a responsive website.
        `,
        keywords: ['CSS'],
        resources: [],
        participants: 2,
        experienceId: 5
    },
    {
        id: 5,
        name: 'Soup Kitchen management',
        type: PROJECT_TYPE.PRO,
        description: `
        Windows Forms application development using C# .NET 4.5 and Visual Studio 2012 allowing the
complete management of a soup kitchen (users, customers, prices, transactions, search, history).
        `,
        keywords: ['C#', '.NET', 'WinForms'],
        resources: [{
            name: 'Lauberivière',
            type: RESOURCE_TYPE.IMG,
            src: 'assets/images/Lauberiviere.jpg'
        }, {
            name: 'Blog url',
            type: RESOURCE_TYPE.LINK,
            src: 'http://unstageauquebec.blogspot.com/2015/05/captures-decran.html'
        }],
        participants: 2,
        experienceId: 5
    },
    {
        id: 6,
        name: 'Medical data visualization application (front-end)',
        type: PROJECT_TYPE.PRO,
        description: 'Web application for medical data visualization',
        details: `
        The R&D team developed many tools for data visualization, but the problem was that they were only fat
         clients that needed installation. This project had to be a web application so the medical staff could
          use any computer or tablets to visualize the patient data.
For 1 year, I worked on the front-end of this application that could be used to visualize CT scans
 (with cornerstone.js) and 3D models (with Three.js) of the patients that were store in a CouchDB
  database or on the filesystem. Firstly, I entirely developed this application using JQuery and then I
   started from scratch using AngularJS.
        `,
        keywords: ['Mercurial', 'Redmine', 'Docker', 'HTML', 'CSS', 'AngularJS', 'JQuery', 'Three.js'],
        resources: [{
            name: 'Medical data visualization',
            type: RESOURCE_TYPE.IMG,
            src: 'assets/images/storage.jpg'
        }],
        participants: 1,
        experienceId: 4
    },
    {
        id: 7,
        name: 'Annotation application for surgeons formation',
        type: PROJECT_TYPE.PRO,
        description: 'Full-stack development (Angular, Node.js) of a web application to annotate surgical videos',
        details: `
        The goal of this project was to improve the formation of surgeons and medical staff to reduce surgery
         mistakes. This project was the development of a web tools that allows to add textual or graphical (SVG)
          annotations of videos collaboratively. The annotated videos would come directly or differed from operating
           rooms. This application would allow medical staff to point objects of interests remotely during a lecture
            in an amphitheater for example.
To realize this project, I chose Angular for the front-end and NestJS, a Node.js framework, for the back-end.
 The back-end managed the annotations, the videos, generated the videos thumbnails, recorded live video streams,
  used Websockets to keep each client up-to-date and to allow collaboration.
The front-end displayed all the saved videos and the operating rooms. The user could chose a live video and
 annotate it by drawing bounding boxes around the objects of interests while the stream was playing and when he
  left the stream, it was recorded and he could replay the video with all the annotations he draw earlier.
He could also edit the annotations (resize, move), delete them and add more annotations. Textual annotations were
 used to describe operation phases, actions (medical staff involved, tool used, action performed) and comments.
I chose to group all the annotation tools in an Angular library so it could be used in other applications.
        `,
        keywords: ['Kanban', 'Scrum', 'Gitlab', 'Angular', 'NestJS', 'Node.js', 'Gitlab CI', 'Docker'],
        resources: [{
            name: 'Annotation page',
            type: RESOURCE_TYPE.IMG,
            src: 'assets/images/capture_condor07.png'
        }, {
            name: 'Annotation model',
            type: RESOURCE_TYPE.IMG,
            src: 'assets/images/saved-annotation.png'
        }, {
            name: 'Gitlab pipeline',
            type: RESOURCE_TYPE.IMG,
            src: 'assets/images/CI.png'
        }],
        participants: 1,
        experienceId: 3
    },
    {
        id: 8,
        name: 'Annotation application for deep learning',
        type: PROJECT_TYPE.PRO,
        description: 'Development of an annotation application with Angular',
        details: `
        I worked on the front-end with Angular on this application that used and improved the library of the last annotation
        project. This application was mainly developed for deep learning purposes.
In this application, we added Authentication. The users could log in, manage the videos if he had a role that allowed it
 (add, delete), add videos to his bookmarks, change videos status (to annotate, annotating, annotated) and annotate the
  videos graphically.
The annotations were labelled bounding boxes that could have different sizes and positions while the video was playing.
 Each label was associated to a color. The annotations could be duplicated, cut, resize, moved, hidden/shown or deleted
  by the user. The application was dockerized and deployed regularly when the pipeline passed. We used Gitlab CI and set
   4 stages (application build, lint and unit tests, docker build, deployment). We used Jasmine for the unit tests and
    Cypress for the end-to-end tests.
        `,
        keywords: ['Kanban', 'Gitlab', 'Angular', 'Gitlab CI', 'Docker', 'Cypress', 'JWT'],
        resources: [{
            name: 'Annotation page',
            type: RESOURCE_TYPE.IMG,
            src: 'assets/images/annotations.jpg'
        }, {
            name: 'Video list',
            type: RESOURCE_TYPE.IMG,
            src: 'assets/images/videos.jpg'
        }, {
            name: 'Demo',
            type: RESOURCE_TYPE.YOUTUBE,
            src: '5mYw6ggjQbE'
        }, {
            name: 'Previous annotation project',
            type: RESOURCE_TYPE.LINK,
            src: 'projects/7'
        }, {
          name: 'Research paper',
          type: RESOURCE_TYPE.LINK,
          src: 'https://www.researchgate.net/publication/371871723_INDEXITY_a_web-based_collaborative_tool_for_medical_video_annotation'
        }, {
          name: 'GitHub repository',
          type: RESOURCE_TYPE.LINK,
          src: 'https://github.com/CAMMA-public/indexity'
        }],
        participants: 2,
        experienceId: 3
    },
    {
        id: 9,
        name: 'Store management',
        type: PROJECT_TYPE.ACADEMIC,
        description: `
        Windows Forms application development using C# .NET and Visual Studio 2012 allowing
the complete management of a merchant application (product catalog, multi-criteria
search, reviews management, sales, statistics)
        `,
        keywords: ['C#', '.NET', 'Windows Forms'],
        resources: [],
        participants: 2,
        experienceId: 2
    },
    {
        id: 10,
        name: 'Rogue Like game',
        type: PROJECT_TYPE.ACADEMIC,
        description: `
        Rogue-like game development using Java Swing (on Jdeveloper). Respect of MVC
architecture.
ASCII representation, ranking, random game element generation (ennemies, map, objects, ...), permadeath, ...
        `,
        keywords: ['Java', 'Swing'],
        resources: [{
            name: 'Rogue game screenshot',
            type: RESOURCE_TYPE.IMG,
            src: 'assets/images/Rogue.jpg'
        }],
        participants: 2,
        experienceId: 2
    }

];

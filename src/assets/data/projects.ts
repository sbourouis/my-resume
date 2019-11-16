import { Project, PROJECT_TYPE, Resource, RESOURCE_TYPE } from 'src/app/models/project.model';

// TODO
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
        resources: [],
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
        resources: [{
            name: 'Québec Info Musique',
            type: RESOURCE_TYPE.LINK,
            src: 'http://qim.com'
        }],
        participants: 2,
        experienceId: 5
    },
    {
        id: 5,
        name: 'Medical data visualization application (front-end)',
        type: PROJECT_TYPE.PRO,
        description: `
        I developed the front-end of a web application allowing to visualize medical
         data (3D models, CT scans) from the filesystem and also from a CouchDB
          database. I used three.js library to visualize the 3D models and
           cornerstone.js for the CT scan. The back-end was developed by 2 colleagues
            in Node.js. Firstly, I entirely developed this application using JQuery
             and then I started from scratch with AngularJS.
        `,
        keywords: ['Mercurial', 'Redmine', 'Docker', 'HTML', 'CSS', 'AngularJS', 'JQuery', 'Three.js'],
        resources: [{
            name: 'Medical data visualization',
            type: RESOURCE_TYPE.IMG,
            src: 'assets/images/storage.png'
        }],
        participants: 1,
        experienceId: 4
    },
    {
        id: 6,
        name: 'Annotation application',
        type: PROJECT_TYPE.PRO,
        description: `
        I developed an Angular application to annotate surgical/medical videos.
         Those annotations were stored in a Postgresql database and used by deep
         learning algorithms to create more annotations. The UI was intuitive and
          collaborative (Websockets). Users could log in (JWT), manage videos, draw
           and label bounding boxes around the objects of interest in the videos and
            follow them while the video was playing. The application was dockerized
             and deployed regularly when the pipeline passed. We used Gitlab CI
              and set 4 stages (application build, lint and unit tests, docker build,
                 deployment).
        We used Jasmine for the unit tests and Cypress for the end-to-end tests.
        `,
        keywords: ['Kanban', 'Gitlab', 'Angular', 'NestJS', 'Node.js', 'Gitlab CI', 'Docker', 'Cypress'],
        resources: [{
            name: 'Annotation page',
            type: RESOURCE_TYPE.IMG,
            src: 'assets/images/annotations.png'
        }, {
            name: 'Video list',
            type: RESOURCE_TYPE.IMG,
            src: 'assets/images/videos.png'
        }],
        participants: 1,
        experienceId: 3
    },
    {
        id: 7,
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
        id: 8,
        name: 'Rogue Like game',
        type: PROJECT_TYPE.ACADEMIC,
        description: `
        Rogue-like game development using Java Swing (on Jdeveloper). Respect of MVC
architecture.
ASCII representation, ranking, random game element generation (ennemies, map, objects, ...), permadeath, ...
        `,
        keywords: ['Java', 'Swing'],
        resources: [],
        participants: 2,
        experienceId: 2
    },
    {
        id: 9,
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
            src: 'assets/images/Lauberiviere.png'
        }, {
            name: 'Blog url',
            type: RESOURCE_TYPE.LINK,
            src: 'http://unstageauquebec.blogspot.com/2015/05/captures-decran.html'
        }],
        participants: 2,
        experienceId: 5
    }

];

import { Experience, EXPERIENCE_TYPE } from 'src/app/models/experience.model';

export const experiences: Experience[] = [
    {
        id: 1,
        name: 'Engineer degree',
        location: 'CNAM',
        description: 'Computer science engineer degree: Valedictorian',
        type: EXPERIENCE_TYPE.SCHOOL,
        fromDate: new Date(2015, 9).toISOString(),
        toDate: new Date(2018, 8).toISOString()
    },
    {
        id: 2,
        name: 'Advanced diploma in IT',
        location: 'IUT Robert Schuman',
        type: EXPERIENCE_TYPE.SCHOOL,
        fromDate: new Date(2013, 9).toISOString(),
        toDate: new Date(2015, 8).toISOString()
    },
    {
        id: 3,
        name: 'Development Engineer',
        location: 'IHU, Strasbourg, France',
        description: `Web applications development using Angular 8, Unit tests,
         end-to-end tests writing, code review on both front and back-end, Dockerfile writing,
         Angular libraries development, CI pipeline set up…`,
        type: EXPERIENCE_TYPE.WORK,
        fromDate: new Date(2018, 9).toISOString(),
        toDate: new Date(2019, 8).toISOString()
    },
    {
        id: 4,
        name: 'R&D Developer Apprentice',
        location: 'IRCAD, Strasbourg, France',
        description: `Full-stack web development using AngularJS, Angular and Node.js/NestJS,
         unit tests writing, member of a Scrum development team… `,
        type: EXPERIENCE_TYPE.WORK,
        fromDate: new Date(2015, 9).toISOString(),
        toDate: new Date(2018, 8).toISOString()
    },
    {
        id: 5,
        name: 'Application Developer Intern',
        location: 'ACCES SAVOIRS, Québec city, Canada',
        description: 'Applications development (mainly C# .NET) for non-profit organizations.',
        type: EXPERIENCE_TYPE.WORK,
        fromDate: new Date(2015, 4).toISOString(),
        toDate: new Date(2015, 7).toISOString()
    }
];

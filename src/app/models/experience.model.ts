export enum EXPERIENCE_TYPE {
    SCHOOL = 'school',
    WORK = 'work'
}

export interface Experience {
    id?: number;
    name: string;
    location: string;
    fromDate: string;
    toDate: string;
    type: EXPERIENCE_TYPE;
    description?: string;
}

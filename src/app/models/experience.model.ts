export enum EXPERIENCE_TYPE {
    SCHOOL = 'school',
    WORK = 'work'
}

export interface Experience {
    id?: number;
    name: string;
    location: string;
    fromDate: Date;
    toDate: Date;
    type: EXPERIENCE_TYPE;
    description?: string;
}

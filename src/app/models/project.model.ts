export enum PROJECT_TYPE {
  ACADEMIC = 'academic',
  PRO = 'professional',
  // PERSONAL = 'personal'
}

export enum RESOURCE_TYPE {
  IMG = 'image',
  VIDEO = 'video',
  LINK = 'link'
}

export interface Resource {
  id?: number;
  name: string;
  src: string;
  type: RESOURCE_TYPE;
}

export interface Project {
  id?: number;
  name: string;
  role?: string;
  description: string;
  keywords: Array<string>;
  experienceId?: number;
  type: PROJECT_TYPE;
  duration?: string;
  resources?: Array<Resource>;
  participants: number;
}

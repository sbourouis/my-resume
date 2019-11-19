export enum PROJECT_TYPE {
  ACADEMIC = 'academic',
  PRO = 'professional',
  // PERSONAL = 'personal'
}

export enum RESOURCE_TYPE {
  IMG = 'image',
  VIDEO = 'video',
  YOUTUBE = 'youtube',
  LINK = 'link'
}

export interface Resource {
  id?: number;
  name: string;
  src: string;
  thumb?: string;
  type: RESOURCE_TYPE;
}

export interface Project {
  id?: number;
  name: string;
  role?: string;
  description: string;
  details?: string;
  keywords: Array<string>;
  experienceId?: number;
  type: PROJECT_TYPE;
  duration?: string;
  resources: Array<Resource>;
  participants: number;
}

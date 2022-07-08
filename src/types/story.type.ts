export interface Story {
  author: string;
  created: Date;
  updated: Date;
  chapters: Chapter[];
}

export interface Chapter {
  index: number;
  id: string;
  title: string;
  content: string;
  image: string;
  actions: Action[];
  action_type: string;
  action_value: string;
}

export interface Action {
  id: string;
  target: string;
}

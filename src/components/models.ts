export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface Tarot {
  id: string | string[];
  number: string;
  name: string;
  description: string;
  type: string;
  frequency: string;
  effect: string;
  image_url: string;
}

import { components } from "./directus";

export type Workspace = {
  id: number;
  name: string;
  type: string;
  location: string;
  capital: number;
  description: string;
  image: string;
  active: boolean;
}

export type Duration = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

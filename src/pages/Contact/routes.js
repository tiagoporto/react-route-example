import { Person } from "./Person";

export const routes = [
  {
    title: "Person",
    path: ":personId",
    Component: Person,
  },
];

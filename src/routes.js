import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";

export const routes = [
  {
    title: "Home",
    path: "/",
    Component: Home,
  },
  {
    title: "About",
    path: "/about",
    Component: About,
  },
  {
    title: "Contact",
    path: "/contact",
    Component: Contact,
  },
];

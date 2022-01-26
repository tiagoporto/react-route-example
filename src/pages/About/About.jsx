import { routes } from "./routes";
import { Routes, Route, Link } from "react-router-dom";

export function About() {
  return (
    <>
      <nav>
        {routes.map(({ path, title }) => (
          <Link to={path} key={title}>
            {title}
          </Link>
        ))}
      </nav>

      <Routes>
        {routes.map(({ path, Component, title }) => (
          <Route path={path} element={<Component />} key={title} />
        ))}
      </Routes>
    </>
  );
}

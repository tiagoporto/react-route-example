import { routes } from "./routes";
import { Routes, Route, Link } from "react-router-dom";

export function Contact() {
  return (
    <>
      <nav>
        <Link to="tiago">Tiago</Link>
        <Link to="joao">Joao</Link>
      </nav>

      <Routes>
        <Route index element={<div>Contact page</div>} />

        {routes.map(({ path, Component, title }) => (
          <Route path={path} element={<Component />} key={title} />
        ))}
      </Routes>
    </>
  );
}

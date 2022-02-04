import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { routes } from "./routes";

export function App() {
  return (
    <div className="App">
      <nav>
        {routes.map(({ path, title }) => (
          <Link to={path} key={title}>
            {title}
          </Link>
        ))}
      </nav>
      <Routes>
        {routes.map(({ path, Component, title }) => (
          <Route path={`${path}/*`} element={<Component />} key={title}s />
        ))}
      </Routes>
    </div>
  );
}

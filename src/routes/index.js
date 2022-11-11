import Home from "../pages/Home";
import About from "../pages/About";

export const router = [
  { path: "/", element: <Home /> },
  { path: "*", element: <Home /> },
  { path: "/about", element: <About /> },
];

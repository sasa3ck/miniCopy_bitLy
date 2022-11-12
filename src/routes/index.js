import Home from "../pages/Home";
import About from "../pages/About";
import RegLog from "../pages/RegLog";

export const router = [
  { path: "/", element: <RegLog /> },
  { path: "*", element: <RegLog /> },
  { path: "/home", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/login", element: <RegLog /> },
];

import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import About from "../pages/About";
import Blog from "../pages/Blog";

const router = createBrowserRouter([
  {
    exact: true,
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/faq",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

export default router;

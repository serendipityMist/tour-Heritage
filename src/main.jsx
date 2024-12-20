import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Link2 from "./Pages/About/Link2.jsx";
import Link1 from "./Pages/Explore/Link1.jsx";
import Link3 from "./Pages/Activities/Link3.jsx";
import Link4 from "./Pages/Link4/Link4.jsx";
import Details from "./Pages/Details/Details.jsx";
import Login from "./Pages/LogInSignUp/Login.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<Link2 />} />
      <Route path="activites" element={<Link1 />} />
      <Route path="explore" element={<Link3 />} />
      <Route path="link4" element={<Link4 />} />
      <Route path="form" element={<Login />} />
      <Route path="details/:id" element={<Details />} />

      {/* Add details route */}
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

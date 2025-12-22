import ( createBrowserRouter ) from "react-router-dom";
import MainSection from "../Components/MainSection";
import About from "../Components/About";

const router = createBrowserRouter([
  {_path: "/123", element: <MainSection />},
  {_path: "/about", element: <About />},
]);

export default router;
 
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./component/NavBar";
import Post from "./pages/Post";
import Help from "./pages/Help";
import { blogLoader } from "./pages/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} loader={blogLoader} />
        <Route path="post" element={<Post />} loader={blogLoader} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<Help />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;

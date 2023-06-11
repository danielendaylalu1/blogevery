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
import { useEffect, useState } from "react";
import Blogs from "./pages/Blogs";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchHandler = async () => {
      const response = await fetch(
        ""
      );
      const newdata = await response.json();
      setData(newdata);
    };
    fetchHandler();
  }, []);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home blogs={data} />} />
        <Route path="blogs" element={<Blogs blogs={data} />} />
        <Route path="post" element={<Post blogs={data} />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<Help />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;

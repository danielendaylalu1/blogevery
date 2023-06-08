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

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchHandler = async () => {
      const response = await fetch(
        "https://blog-post-f49f3-default-rtdb.firebaseio.com/blogs.json"
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
        <Route path="post" element={<Post blogs={data} />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<Help />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;

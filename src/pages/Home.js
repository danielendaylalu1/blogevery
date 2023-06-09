import React, { useEffect, useState } from "react";
import "./home.css";
import "./blogs.css";
import { Link } from "react-router-dom";
import HomeHeader from "../component/HomeHeader";
import FilterLinks from "../component/FilterLinks";

export default function Home(props) {
  const filterLinks = [
    "All",
    "News",
    "Forex",
    "Ai",
    "Politics",
    "Tech",
    "Business",
  ];
  const [filterdBlogs, setFilterdBlogs] = useState(props.blogs);
  useEffect(() => {
    setFilterdBlogs(props.blogs);
  }, [props.blogs]);
  const filterHandler = (toShow) => {
    setFilterdBlogs(props.blogs);
    const newBlog = props.blogs.filter((blog) => {
      if (toShow !== "All") {
        return blog.type.toLowerCase() === toShow.toLowerCase();
      }
      return blog;
    });
    setFilterdBlogs(newBlog);
  };
  return (
    <div className="home">
      <HomeHeader />
      <h1 className="home-blog-header">Blogs</h1>
      <FilterLinks filterHandler={filterHandler} filterLinks={filterLinks} />
      <ul className="home-blogs">
        {console.log(filterdBlogs)}
        {filterdBlogs.map((blog) => {
          return (
            <li className="home-blogs-item" key={blog.id}>
              <h3 className="type">{blog.type}</h3>
              <h2 className="title">{blog.title}</h2>
              <p className="content">
                {blog.blog.substring(0, 200)}. <Link to="blogs">Read more</Link>
              </p>
              <h4 className="date">{blog.date}</h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

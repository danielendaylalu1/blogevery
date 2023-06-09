import React from "react";
import { useState, useEffect } from "react";
import "./blogs.css";
import FilterLinks from "../component/FilterLinks";

export default function Blogs(props) {
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
    <div>
      <h1 className="home-blog-header">Blogs</h1>
      <FilterLinks filterHandler={filterHandler} filterLinks={filterLinks} />
      <ul className="home-blogs">
        {console.log(filterdBlogs)}
        {filterdBlogs.map((blog) => {
          return (
            <li className="home-blogs-item" key={blog.id}>
              <h3 className="type">{blog.type}</h3>
              <h2 className="title">{blog.title}</h2>
              <p className="content">{blog.blog}</p>
              <h4 className="date">{blog.date}</h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

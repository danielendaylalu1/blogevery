import React from "react";
import { useState, useEffect } from "react";
import "./blogs.css";

export default function Blogs(props) {
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
      <div className="blogs-filter">
        <ul className="filter-items">
          <li
            className="filter-item"
            onClick={(e) => filterHandler(e.target.innerHTML)}
          >
            All
          </li>
          <li
            className="filter-item"
            onClick={(e) => filterHandler(e.target.innerHTML)}
          >
            News
          </li>
          <li
            className="filter-item"
            onClick={(e) => filterHandler(e.target.innerHTML)}
          >
            Forex
          </li>
          <li
            className="filter-item"
            onClick={(e) => filterHandler(e.target.innerHTML)}
          >
            Ai
          </li>
          <li
            className="filter-item"
            onClick={(e) => filterHandler(e.target.innerHTML)}
          >
            politics
          </li>
          <li
            className="filter-item"
            onClick={(e) => filterHandler(e.target.innerHTML)}
          >
            Tech
          </li>
          <li
            className="filter-item"
            onClick={(e) => filterHandler(e.target.innerHTML)}
          >
            Business
          </li>
        </ul>
      </div>
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

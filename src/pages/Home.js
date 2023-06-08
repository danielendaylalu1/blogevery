import React, { useState } from "react";
import "./home.css";
import { useLoaderData } from "react-router-dom";

export default function Home(props) {
  const blogs = useLoaderData();
  const [filterdBlogs, setFilterdBlogs] = useState(blogs);
  const filterHandler = (toShow) => {
    setFilterdBlogs(blogs);
    const newBlog = blogs.filter((blog) => {
      if (toShow === "All") {
        return blog;
      }
      return blog.type.toLowerCase() === toShow.toLowerCase();
    });
    setFilterdBlogs(newBlog);
  };
  return (
    <div className="home">
      <div className="home-header">
        <div className="home-header-text">
          <h1 className="home-header-large">Blog~every</h1>
          <h2 className="home-header-md">
            Wellcome to blog~every enjoy! our blogs.
          </h2>
        </div>
        <p className="home-discription">
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. is simply dummy text of the printing and typesetting industry.
        </p>
      </div>
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

export const blogLoader = async () => {
  const response = await fetch(
    "https://blog-post-f49f3-default-rtdb.firebaseio.com/blogs.json"
  );
  return response.json();
};

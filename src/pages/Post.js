import React, { useState } from "react";
import "./post.css";
import { useLoaderData } from "react-router-dom";

export default function Post() {
  const blogs = useLoaderData();
  const [blog, setBlog] = useState({
    id: Math.random(),
    type: "",
    title: "",
    blog: "",
    date: new Date().toDateString(),
  });

  const blogPostHandler = async (data) => {
    const response = fetch(
      "https://blog-post-f49f3-default-rtdb.firebaseio.com/blogs.json",
      {
        method: "PUT",
        body: JSON.stringify(blogs),
      }
    );
    if (!response.ok) {
      console.log(response);
    }
  };

  return (
    <div className="post">
      <h1 className="post-header">Post your Blog</h1>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(blog);
          blogs.push(blog);
          blogPostHandler(blog);
        }}
      >
        <label htmlFor="cars" className="form-label">
          blog type:
        </label>
        <select
          id="blog"
          name="blogs"
          value={blog.type}
          onChange={(e) => {
            const newType = e.target.value;
            setBlog((prevVal) => ({ ...prevVal, type: newType }));
          }}
        >
          <option value="news">News</option>
          <option value="forex">Forex</option>
          <option value="ai">Ai</option>
          <option value="politics">politics</option>
          <option value="tech">Tech</option>
          <option value="business">Business</option>
        </select>
        <label htmlFor="title" className="form-label">
          title:
        </label>
        <input
          id="title"
          placeholder="title"
          name="title"
          type="text"
          value={blog.title}
          onChange={(e) => {
            const newTitle = e.target.value;
            setBlog((prevVal) => ({ ...prevVal, title: newTitle }));
          }}
        />
        <label htmlFor="blog" className="form-label">
          blog:
        </label>
        <textarea
          placeholder="blog.."
          rows="6"
          cols="50"
          name="blog"
          value={blog.blog}
          onChange={(e) => {
            const newBlog = e.target.value;
            setBlog((prevVal) => ({ ...prevVal, blog: newBlog }));
          }}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

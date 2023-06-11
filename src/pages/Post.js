import React, { useState } from "react";
import "./post.css";
import useInput from "../hooks/index";

export default function Post(props) {
  const blogs = props.blogs;
  const [blog, setBlog] = useState({
    id: Math.random(),
    type: "",
    title: "",
    blog: "",
    date: new Date().toDateString(),
  });
  const {
    value: titleValue,
    isValid: titleIsValid,
    isInvalid: titleIsInvalid,
    changeHandler: titleChangeHandler,
    blurHandler: titleBlurHandler,
    reset: titleReset,
  } = useInput((val) => val.length > 6);
  const {
    value: blogValue,
    isValid: blogIsValid,
    isInvalid: blogIsInvalid,
    changeHandler: blogChangeHandler,
    blurHandler: blogBlurHandler,
    reset: blogReset,
  } = useInput((val) => val.length > 200);

  const formIsValid = blogIsValid && titleIsValid;

  const blogPostHandler = async () => {
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
          setBlog({
            id: Math.random(),
            type: "",
            title: "",
            blog: "",
            date: new Date().toDateString(),
          });
          titleReset();
          blogReset();
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
        {titleIsInvalid && (
          <p className="error-text">title must not be empty</p>
        )}
        <input
          id="title"
          placeholder="title"
          name="title"
          type="text"
          value={blog.title}
          onChange={(e) => {
            const newTitle = e.target.value;
            setBlog((prevVal) => ({ ...prevVal, title: newTitle }));
            titleChangeHandler(newTitle);
          }}
          onBlur={() => {
            titleBlurHandler();
          }}
        />
        <label htmlFor="blog" className="form-label">
          blog:
        </label>
        {/* {console.log(blogValue, blogIsValid, blogIsInvalid)} */}
        {blogIsInvalid && (
          <p className="error-text">
            blog must be > 200 char {`${blogValue.length}/ 200`}{" "}
          </p>
        )}
        <textarea
          placeholder="blog.."
          rows="6"
          cols="50"
          name="blog"
          value={blog.blog}
          onChange={(e) => {
            const newBlog = e.target.value;
            setBlog((prevVal) => ({ ...prevVal, blog: newBlog }));
            blogChangeHandler(newBlog);
          }}
          onBlur={() => {
            blogBlurHandler();
          }}
        />
        <button type="submit" disabled={!formIsValid}>
          Post
        </button>
      </form>
    </div>
  );
}

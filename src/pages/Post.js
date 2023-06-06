import React from "react";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <h1 className="post-header">Post your Blog</h1>
      <form className="form">
        <label for="title" className="form-label">
          title:
        </label>
        <input id="title" placeholder="title" name="title" type="text" />
        <label for="blog" className="form-label">
          blog:
        </label>
        <textarea placeholder="blog.." rows="4" cols="50" />
        <label for="date" className="form-label">
          date:
        </label>
        <input id="date" name="date" type="date" />
        <button type="button">Post</button>
      </form>
    </div>
  );
}

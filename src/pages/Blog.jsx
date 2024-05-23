import { useEffect, useState } from "react";
import axios from "axios";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await axios.get();
      setBlogs(response.data.data);
    };
    fetchBlogs();
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.title}>
            <h2>{blog.title}</h2>
            <p>{blog.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;

const BlogItem = ({ blog }) => {
  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.summary}</p>
      <img src={blog.featured_image} alt={blog.title} />
    </div>
  );
};

export default BlogItem;

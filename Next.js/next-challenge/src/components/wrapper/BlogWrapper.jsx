// BlogWrapper.jsx
import Blog from "../../pages/blog/index";

const BlogWrapper = (props) => {
  const { posts } = props;

  return (
    <>
      {console.log("dentro do wrapper", posts)}
      <Blog posts={posts} />
    </>
  );
};

export default BlogWrapper;

// pages/blog.jsx
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/Footer";
import { Title } from "@/components/ui/title/Title";
import BlogCardPri from "@/components/ui/blogCardPri/BlogCardPri";
import BlogCardSec from "@/components/ui/blogCardSec/BlogCardSec";
import styles from "./styles.module.css";
import { sanityClient } from "@/utils/sanity";

const Blog = ({ posts }) => {

  return (
    <>
      <Header />
      <Title title="Blog"></Title>
      <BlogCardPri
        key={posts[0].title}
        title={posts[0].title}
        author={posts[0].author}
        date={posts[0].date}
        description={posts[0].synopsis}
        image={posts[0].img}
        link={posts[0].title}
      />
      <div className={styles.card}>
        {posts.slice(1).map((post) => (
          <BlogCardSec
            key={post.title}
            title={post.title}
            image={post.img}
            author={post.author}
            date={post.date}
            description={post.synopsis}
            link={post.title}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const posts = await sanityClient.fetch(
    `*[_type == "post"] | order(_createdAt asc) {
      title,
      author,
      date,
      synopsis,
      text,
      "img": img.asset->url
    }`
  );

  return {
    props: {
      posts,
    },
  };
}

export default Blog;

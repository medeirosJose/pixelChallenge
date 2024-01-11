// pages/blog/[slug].jsx
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import styles from "./styles.module.css";
import { sanityClient } from "@/utils/sanity";

const BlogDetail = ({ post }) => {
  if (!post) {
    return <div>Carregando...</div>;
  }
  return (
    <>
      <Header />
      <div className={styles.wrapperContainer}>
        <div className={styles.postImage}>
          <img src={post?.img} alt="Imagem do post" />
        </div>
      </div>
      <div className={styles.textArea}>
        <div className={styles.postTitle}>{post.title}</div>
        <div className={styles.postAuthorDate}>
          Por {post.author}, {post.date}
        </div>

        <div className={styles.postText}>{post.text}</div>
      </div>
      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  const posts = await sanityClient.fetch(`*[_type == "post"] { title }`);

  const paths = posts.map((post) => ({
    params: { slug: encodeURIComponent(post.title) },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  console.log("Params:", params);

  // Check if the slug parameter is undefined
  if (!params || !params.slug) {
    return {
      notFound: true,
    };
  }

  const { slug } = params;

  const posts = await sanityClient.fetch(
    `*[_type == "post" && title == $title] {
      title,
      author,
      date,
      synopsis,
      text,
      "img": img.asset->url
    }`,
    { title: decodeURIComponent(slug) }
  );

  // Check if the post array is not empty before accessing its properties
  if (posts.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: posts[0],
    },
    revalidate: 1,
  };
}

export default BlogDetail;

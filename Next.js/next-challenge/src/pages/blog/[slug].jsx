// pages/blog/[slug].jsx
import { useRouter } from "next/router";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/Footer";
import styles from "./styles.module.css";
import { sanityClient } from "@/utils/sanity";

const BlogDetail = ({ post }) => {
  const router = useRouter();

  return (
    <>
      <Header />
      <div className={styles.wrapperContainer}>
        <div className={styles.postImage}>
          <img src={post.img} alt="Imagem do post" />
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
  const { slug } = params;

  const post = await sanityClient.fetch(
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

  return {
    props: {
      post: post[0],
    },
    revalidate: 1,
  };
}

export default BlogDetail;

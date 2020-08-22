import { Post } from "../../src/containers";

export async function getStaticPaths() {
  const paths = ["/posts/1", "/posts/2"];
  return { paths, fallback: true };
}

export async function getStaticProps({ query, params }) {
  const { id } = query || params;
  if (!id) return;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const json = await res.json();
  return {
    props: {
      post: json
    }
  };
}

// export async function getServerSideProps({ query }) {
//   const { id } = query;
//   if (!id) return;
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   const json = await res.json();
//   return {
//     props: {
//       post: json
//     }
//   };
// }

export default Post;

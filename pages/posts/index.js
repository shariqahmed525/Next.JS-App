import { Posts } from "../../src/containers";
export default Posts;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = await res.json();
  return {
    props: {
      posts: json
    }
  };
}

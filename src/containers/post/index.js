import React from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

const Post = ({ post }) => {
  const router = useRouter();
  const { id } = router.query;

  if (router.isFallback) {
    return (
      <div>
        <Head>
          <title>Post Loading...</title>
          <link rel="icon" href="/faviconpost.ico" />
        </Head>
        loading...
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>Post</title>
        <link rel="icon" href="/faviconpost.ico" />
      </Head>
      <Link href={"/posts"}>
        <a>&larr; Back</a>
      </Link>
      <br />
      <br />
      {id && post && (
        <>
          Id No. {id} post is here: <br />
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </>
      )}
    </div>
  );
};
export default Post;

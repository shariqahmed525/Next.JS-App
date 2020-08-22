import React from "react";
import Link from "next/link";
import Head from "next/head";

const Posts = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Posts</title>
        <link rel="icon" href="/faviconposts.ico" />
      </Head>
      <Link href={"/"}>
        <a>&larr; Back</a>
      </Link>
      <br />
      <br />
      {posts && posts.length > 0 && (
        <>
          All Posts are here: <br />{" "}
          <ul>
            {posts.map(post => {
              return (
                <li key={post.id}>
                  <h3>
                    <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                      <a>{post.title}</a>
                    </Link>
                  </h3>
                  <p>{post.body}</p>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default Posts;

import React from "react";
import Head from "next/head";
import Link from "next/link";

const About = ({ stars }) => {
  return (
    <div>
      <Head>
        <title>About</title>
        <link rel="icon" href="/faviconabout.ico" />
      </Head>
      <Link href={"/"}>
        <a>&larr; Back</a>
      </Link>
      <br />
      <br />
      This is the about page
      <br />
      <br />
      The Next stars: {stars}
    </div>
  );
};

About.getInitialProps = async () => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await res.json();
  return { stars: json.stargazers_count };
};

export default About;

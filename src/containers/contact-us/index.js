import React from "react";
import Head from "next/head";
import Link from "next/link";

const ContactUs = () => {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
        <link rel="icon" href="/faviconcontact-us.ico" />
      </Head>
      <Link href={"/"}>
        <a>&larr; Back</a>
      </Link>
      <br />
      <br />
      Hello Contact Us
    </div>
  );
};

export default ContactUs;

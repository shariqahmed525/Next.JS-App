import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
          </a>

          <Link href="/about">
            <div className={styles.card}>
              <h3>About &rarr;</h3>
            </div>
          </Link>

          <Link href="/contact-us">
            <div className={styles.card}>
              <h3>Contact Us &rarr;</h3>
            </div>
          </Link>

          <Link href="/posts">
            <div className={styles.card}>
              <h3>Posts &rarr;</h3>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}

import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";

export default function Aboutpage() {
  const name = "접속자";
  return (
    <body className={styles.bodybody}>
      <div className="aboutabout">
        <Head>
          <title>About</title>
        </Head>
        <h1>안녕하세요, {name}님!</h1>
        <h3>폰트 적용,그라데이션 배경, 사진첨부 등등...</h3>
      </div>
    </body>
  );
}

import Head from "next/head";
import React from "react";

export default function Aboutpage() {
  const name = "차윤지";
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <p>안녕하세요, {name}님!</p>
      about
    </div>
  );
}

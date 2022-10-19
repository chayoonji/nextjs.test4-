import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Contect() {
  return (
    <div className={styles.daja}>
      <h1>profile</h1>
      <img
        src="/images/하늘.jpg"
        alt="왜 안 뜨지"
        width="100px"
        height="100px"
      ></img>
      <p>안녕하세요 반갑습니다.</p>
      <p>이름:차윤지</p>
    </div>
  );
}

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from '@/components/header';

export default function Home() {
  return (
    <main>
      <Header />
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJs Course!</h1>
      <p>Let&apos;s get started!</p>
      <p>
        {/* 앵커 요소를 사용하게 되면 단일 페이지라는 장점을 사용할 수 없게 된다 앵커 요소 대신에 링크를 사용해야한다, 컴포넌트로 단일 페이지에 머무를 수 있게 하기 위해서 */}
        {/* <a href="/about">About Us</a> */}
        <Link href="/about">About Us</Link>
      </p>
    </main>
  );
}

import Link from "next/link";

export default function Home() {
  const linkStyle = "underline text-cyan-600 hover:text-cyan-300";
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link className={linkStyle} href="./week-2">Week-2</Link>      
    </main>
  );
}

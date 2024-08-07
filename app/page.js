import Link from "next/link";

export default function Home() {
  const linkStyle = "underline text-cyan-600 hover:text-cyan-300";
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <div>
        <Link className={linkStyle} href="./week-2">Week-2</Link>
      </div>
      <div>
        <Link className={linkStyle} href="./week-3">Week-3</Link> 
      </div> 
      <div>
        <Link className={linkStyle} href="./week-4">Week-4</Link> 
      </div> 
      <div>
        <Link className={linkStyle} href="./week-5">Week-5</Link> 
      </div> 
      <div>
        <Link className={linkStyle} href="./week-6">Week-6</Link> 
      </div> 
      <div>
        <Link className={linkStyle} href="./week-7">Week-7</Link> 
      </div> 
      <div>
        <Link className={linkStyle} href="./week-8">Week-8</Link> 
      </div> 
      <div>
        <Link className={linkStyle} href="./week-10">Week-10</Link> 
      </div> 
    </main>
  );
}

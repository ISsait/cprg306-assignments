import StudentInfo from "./student-info";
import Link from "next/link";

export default function Page() {
  const linkStyle = "underline text-cyan-600 hover:text-cyan-300";
  return (
    <main>
      <h1>Shopping List</h1>
      <div>
        <StudentInfo />
      </div>
      <div>
        <Link className={linkStyle} href="./">
          Home
        </Link>
      </div>
    </main>
  );
}

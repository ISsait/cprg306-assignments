import NewItem from "./new-item";
import Link from "next/link";

export default function Page() {
  const linkStyle = "underline text-cyan-600 hover:text-cyan-300";
  return (
    <main className="m-4">
      <div>
        <NewItem />
      </div>
      <div className="flex my-20 w-full items-center justify-center">
        <Link className={linkStyle} href="./">
          Home
        </Link>
      </div>
    </main>
  );
}

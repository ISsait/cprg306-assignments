import ItemList from "./item-list";
import Link from "next/link";

export default function Page() {
  const linkStyle = "underline text-cyan-600 hover:text-cyan-300";
  return (
    <main className="m-4">
      <h1 className="p-3 text-3xl font-serif border">Shopping List</h1>
      <div>
        <ItemList />
      </div>
      <div>
        <Link className={linkStyle} href="./">
          Home
        </Link>
      </div>
    </main>
  );
}

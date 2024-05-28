import ItemList from "./item-list";

export default function Page() {
    return (
        <main className="m-4">
            <h1 className="p-3 text-3xl font-serif border">Shopping List</h1>
            <ItemList />
        </main>
    );
}
export default function Item({name, quantity, category}) {
    return (
        <ul className="m-6 p-2 hover:bg-slate-600 list-disc list-inside bg-slate-800">
            <li><span className="font-bold text-gray-300">Item Name:</span> <span className="text-blue-300">{name}</span></li>
            <li><span className="ml-2 font-bold text-gray-300">Quantity:</span> <span className="text-green-300">{quantity}</span></li>
            <li><span className="ml-4 font-bold text-gray-300">Category:</span> <span className="text-orange-300">{category}</span></li>
        </ul>
    );
}
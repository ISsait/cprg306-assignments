import MealIdeas from './meal-ideas';

export default function Item({item, onHandleClick}) {
    
    return (
        <div className="border-solid border-2 border-zinc-700 m-2">
        <ul className="m-6 p-2 hover:bg-slate-600 list-disc list-inside bg-slate-800" onClick={() => onHandleClick(item)}>
            <li><span className="font-bold text-gray-300">Item Name:</span> <span className="text-blue-300">{item.name}</span></li>
            <li><span className="ml-2 font-bold text-gray-300">Quantity:</span> <span className="text-green-300">{item.quantity}</span></li>
            <li><span className="ml-4 font-bold text-gray-300">Category:</span> <span className="text-orange-300">{item.category}</span></li>
        </ul>
        {item.selected && <MealIdeas ingredient = {item.name}/>}
        </div>
    );
}
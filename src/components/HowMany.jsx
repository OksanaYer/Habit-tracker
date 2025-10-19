import { useState } from "react";
export default function HowMany () {
    const [counter, setCounter] = useState(0)

    function addToCart() {
        setCounter(1);
    }

    function increase() {
        setCounter(prev => prev + 1);
    }

    function decrease() {
        setCounter(prev => (prev > 1 ? prev - 1 : 0));
    }

    return (
        <div className="flex items-center justify-center mt-2">
        {counter === 0 ? (
            <button
            onClick={addToCart}
            className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
            >
            Add to cart
            </button>
        ) : (
            <div className="flex items-center gap-2 bg-gray-100 p-1 rounded shadow">
            <button
                onClick={decrease}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
                −
            </button>

            <span className="w-6 text-center font-semibold">{counter}</span>

            <button
                onClick={increase}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
                ＋
            </button>
            </div>
        )}
        </div>
    );
    }
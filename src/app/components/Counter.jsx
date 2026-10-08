'use client';
import React, { useState } from 'react';


const Counter = () => {
const [count, setCount] = useState(0);

  console.log('Counter component rendered');

   const handleIncrement = () => {
       console.log('Increment button clicked');
         setCount(count + 1);
   }


    return (
        <div>
            <h2 className="text-4xl font-bold mb-4">Counter: {count}</h2>
            <button 
            onClick={handleIncrement}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
            >
                Increment
            </button>
        </div>
    );
};

export default Counter;
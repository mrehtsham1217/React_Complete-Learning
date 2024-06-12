import { useState } from 'react';
// import './App.css';

const Colors = () =>{
  const [color, setColor] = useState("olive");

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2'>
          <button
            className='outline-none px-4 py-1 rounded-full bg-red-600'
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className='outline-none px-4 py-1 rounded-full bg-green-700'
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className='outline-none px-4 py-1 rounded-full bg-blue-600'
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className='outline-none px-4 py-1 rounded-full bg-black text-white'
            onClick={() => setColor("black")}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default Colors;

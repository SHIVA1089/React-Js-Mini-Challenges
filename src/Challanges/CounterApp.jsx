import { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const reset = () => {
    setCount(0);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div className="flex justify-center items-center min-h-screen  font-serif">
      <div className="w-[300px] h-[300px] text-black">
        <h1 className="text-center py-3 font-bold text-2xl">Counter App</h1>
        <h2
          className="text-center py-4 text-3xl font-bold  text-teal-900"
          disabled={count <= 0}
        >
          {count}
        </h2>
        <div className="flex justify-center items-center rounded gap-3 py-3">
          <button
            type="button"
            onClick={decrement}
            className="w-[60px] h-[30px] bg-red-800 text-[#ededed] hover:bg-red-600"
          >
            -
          </button>
          <button
            type="button"
            onClick={reset}
            className="w-[60px] h-[30px] bg-amber-800 text-[#ededed]  hover:bg-amber-600"
          >
            0
          </button>
          <button
            type="button"
            onClick={increment}
            className="w-[60px] h-[30px] bg-green-800 text-[#ededed]  hover:bg-green-600"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterApp;

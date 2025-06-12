import { useState } from "react";

const InputMirror = () => {
  const [text, setText] = useState("");
  const showText = (e) => {
    const userText = e.target.value;
    // console.log(userText);
    setText(userText);
  };

  const removeText = () => {
    setText("");
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="py-2 capitalize text-purple-900 font-serif">
        Input Mirror Challenge
      </h1>
      <div className="flex flex-col items-start w-[250px] font-serif">
        <label htmlFor="mirror-input" className="left">
          Type Your Plan
        </label>
        <input
          type="text"
          id="mirror-input"
          value={text}
          onChange={showText}
          className="w-[250px] h-[30px] p-3 border-2 text-center text-[13px] rounded-2xl border-amber-900 hover:border-red-500 focus:font-bold focus:outline-none "
          placeholder="Text.."
        />
      </div>
      <button
        type="button"
        className="border rounded-2xl mt-1.5 w-[75px] h-[30px] flex flex-col justify-center items-center"
        onClick={removeText}
      >
        reset
      </button>
      <h2 className="py-2 font-serif text-blue-400">
        {text.length <= 0 ? (
          <p>There is No Text!</p>
        ) : (
          <p>
            {text} {text.length}
          </p>
        )}
      </h2>
    </div>
  );
};

export default InputMirror;
// //focus:outline-none focus:ring-2 focus:ring-purple-500
//  <span className="text-green-700">{text.length}</span>

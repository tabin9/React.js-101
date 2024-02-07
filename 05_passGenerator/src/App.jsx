import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  // various useState
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef - used it so that the password gets highlighted
              // notice we set a ref in input tag
  const passwordRef = useRef(null);

  // useCallback
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // all alphabets

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "`~!@#$%^&*()_-+={}[]";

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()   // using this we highlight the password
    // passwordRef.current?.setSelectionRange(0, 3)       // say we only want to select first 3 values
    window.navigator.clipboard.writeText(password);
  }, [password]); 

  // useEffect re-render UI whenever any of it's dependencies are changed
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      {/* container */}
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-center text-white my-3 text-3xl">
          Password Generator
        </h1>

        {/* container for input and copy button */}
        <div className="flex shadow-lg rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyPasswordToClipboard}
          >
            copy
          </button>
        </div>

        {/* container for the bottom part */}
        <div className="flex text-sm gap-x-2">
          {/* container for input(range) and label(Length) */}
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={30}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          {/* container for 2 input(checkbox) and 2 label(Numbers, Characters) */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev); // whatever the previous value reverse it
              }}
            />
            <label>Numbers</label>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev); // whatever the previous value reverse it
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
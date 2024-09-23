import { useCallback, useEffect, useRef, useState } from "react";

function PasswordGenerator() {
    const [len, setLen] = useState(8);
    const [charAllowed, setCharAllowed] = useState(false); // use boolean
    const [numAllowed, setNumAllowed] = useState(false);   // use boolean

    const [pass, setPass] = useState("");

    const passRef = useRef(null);

    const RandomString = useCallback(() => {
        let random = "";
        let template = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if (numAllowed) template += '1234567890';
        if (charAllowed) template += '!@#$%^&*()-_=+[]{}|;:,.<>?/~';

        for (let i = 1; i <= len; i++) {  // use `len` instead of `length`
            let finalPassIndex = Math.floor(Math.random() * template.length);  // no `+1` needed
            random += template.charAt(finalPassIndex);
        }
        setPass(random);
    }, [len, numAllowed, charAllowed]);

    const copyToClip = useCallback(() => {
        passRef.current.select();
        window.navigator.clipboard.writeText(pass)
    },[pass])

    useEffect(() => {
        RandomString();
    }, [len, numAllowed, charAllowed, RandomString]);

    return (
      <>
        <div className="bg-gray-600 max-w-screen-md mx-auto my-44 p-6 flex flex-col items-center justify-center rounded-lg">
          <h1 className="items-center text-3xl">PASSWORD GENERATOR</h1>
          <div className="m-8">
              <input type="text" readOnly 
              className="p-2 max-w-screen-md"
              value={pass}
              ref={passRef}/>
              <button onClick={copyToClip}className="bg-blue-400 ml-2 p-2">copy</button>
          </div>
          <div className="flex flex-row items-center space-x-8 mt-4">
            {/* Range Input and Length Label */}
            <label className="flex items-center space-x-2">
              <input type="range" 
              min={6}
              max={20}
              value={len}
              onChange={(e) => setLen(parseInt(e.target.value))}  // ensure it's a number
              />
              <p>Length: {len}</p>
            </label>

            {/* Checkbox and Character Allowed Label */}
            <label className="flex items-center space-x-2">
              <input type="checkbox" checked={charAllowed}  // checked attribute for checkbox
              onChange={() => setCharAllowed((prev) => !prev)} />
              <p>Character Allowed</p>
            </label>

            {/* Checkbox and number Allowed Label */}
            <label className="flex items-center space-x-2">
              <input type="checkbox" checked={numAllowed}  // checked attribute for checkbox
              onChange={() => setNumAllowed((prev) => !prev)} />
              <p>Numbers Allowed</p>
            </label>
          </div>
        </div>
      </>
    );
}

export default PasswordGenerator;

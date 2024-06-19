import React, { useState, useCallback, useEffect, useRef } from "react";

//01--> useCallbacks()--> is used for memoizing.Prevent a function from recreated while every rendering
//02-->useEffect()--> run the function when components is updates or mounted.
//03-->useRef()-->use to create a Reference

const PasswordGen = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNoAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-=[]{}|";
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword])
  
  const CopyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,50)
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed, generatePassword]);

  return (
    <>
      <div className="w-full max-w-md bg-gray-800 mx-auto shadow-md text-orange-500 rounded-lg px-4 py-3 my-8">
        <h1 className="text-center text-white text-2xl">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text"
            name=""
            id=""
            className="outline-none w-full py-1 px-3"
            value={password}
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={CopyPasswordToClipboard}
            className="bg-blue-700 text-white px-3 py-0.5 outline-none shrink-0 hover:bg-black">Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range"
              min={6}
              max={50}
              value={length}
              onChange={(event)=>{setLength(event.target.value)}}
              className="cursor-pointer" />
            <label>Length:{ length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNoAllowed((prev)=>!prev)
              }} />
            <label htmlFor="numInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev)=>!prev)
              }} />
            <label htmlFor="numInput">Characters</label>
          </div>

        </div>
    </div>
    </>
  );
};

export default PasswordGen;

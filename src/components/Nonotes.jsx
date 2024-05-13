import React from "react";

export default function Nonotes({setShow}) {

  return (
    <div className="flex flex-col h-[100dvh] w-full justify-center   items-center gap-5">
      <h1 className="text-4xl font-semibold ">You have no notes</h1>
      <span className="bg-blue-400 rounded-full py-2 px-4 text-2xl text-white">
      <button onClick={() => setShow(true)}>create one now</button>
      </span>
    </div>
  );
}

import React, { useState } from "react";
import UtilityBtns from "./Utlitybtn";
import ReactMarkdown from "react-markdown";
function Notepad({ onAddNote }) {
  const [markdown, setMarkdown] = useState("# Markdown Preview");
  const [write, setWrite] = useState(true);
  const handleIconClick = (markdownText) => {
    setMarkdown((prevMarkdown) => prevMarkdown + markdownText);
  };

  return (
    <main className="flex flex-col gap-5 w-full">
      <UtilityBtns onClick={handleIconClick} />
      {write ? (
        <div>
          <textarea
            className="w-full h-[80vh] bg-[#F8F9F8] p-3"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          ></textarea>
        </div>
      ) : (
        <div className=" bg-[#F8F9F8] w-full h-[80vh] p-3">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      )}
    </main>
  );
}

export default Notepad;

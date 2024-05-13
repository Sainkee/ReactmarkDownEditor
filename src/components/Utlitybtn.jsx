import React from "react";
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Code,
  Heading,
  List,
  Image,
  Link,
} from "lucide-react";

const UtilityBtn = ({ icon, onClick }) => {
  return (
    <button
      className="bg-gray-200  hover:bg-gray-300 text-gray-700 font-bold py-2 px-3 rounded"
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default function UtilityBtns({ onClick }) {
  return (
    <div className="flex gap-2 mb-2">
      <button onClick={() => onClick()} className="border   px-2">Write</button>
      <button className="border  px-2">Preview</button>
      <UtilityBtn icon={<Bold size={20} />} onClick={() => onClick("bold")} />
      <UtilityBtn
        icon={<Italic size={20} />}
        onClick={() => onClick("italic")}
      />
      <UtilityBtn
        icon={<Underline size={20} />}
        onClick={() => onClick("underline")}
      />
      <UtilityBtn
        icon={<Strikethrough size={20} />}
        onClick={() => onClick("strike")}
      />
      <UtilityBtn icon={<Code size={20} />} onClick={() => onClick("code")} />
      <UtilityBtn
        icon={<Heading size={20} />}
        onClick={() => onClick("header2")}
      />

      <UtilityBtn icon={<List size={20} />} onClick={() => onClick("list")} />
      <UtilityBtn icon={<Image size={20} />} onClick={() => onClick("image")} />
      <UtilityBtn icon={<Link size={20} />} onClick={() => onClick("link")} />
    </div>
  );
}

import React from "react";
import { Plus ,Trash2} from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";
export default function Sidebar() {
    const [data,setData] = useState([{title: "sargam"}])

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('data')) || [];
        setData(storedData);
      }, []);
     
  return (
    <aside className="text-center flex flex-col border p-5   w-1/5">
      <span className="text-black flex gap-5 justify-center items-center">
        <h1 className="text-2xl font-medium">Notes</h1>
        <button className="bg-blue-500 rounded-full p-1 flex items-center hover:text-black text-white">
          <Plus />
        </button>
      </span>

      <ul>

       { data.map((item,index)=>{
        return (
            <li key={index} className="flex justify-between items-center">
                <h1>{item.title}</h1>
                <span><Trash2/></span>

            </li>
        )
       })}
      </ul>
    </aside>
  );
}

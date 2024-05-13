import { useState } from "react";
import Nonotes from "./components/Nonotes";
import Notepad from "./components/Notepad";
import Sidebar from "./components/Sidebar";
import Preview from "./components/Preview";
import UtilityBtns from "./components/Utlitybtn";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      {!show ? (
        <Nonotes setShow={setShow}/>
      ) : (
        <div className="flex my-10 gap-10 max-w-7xl mx-auto">
          <Sidebar />
          <div className="flex-auto">
           
            <Notepad />
          </div>
        </div>
      )}
    </>
  );
}

export default App;

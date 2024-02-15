
import { useState } from "react";
import "./App.css";


function App(){

  const[count,setCount] = useState(0);

  function decrementHandler(){
    setCount(count-1);
  }

  
  function incrementHandler(){
    setCount(count+1);
  }
   
  function resetHandler(){
    setCount(0);
  }



  return (
    //1
    <div  className="w-[100vw] h-[100vh] flex justify-center items-center bg-slate-400 flex-col gap-10">
      <div className="text-[#163440] font-medium text-3xl"> Increment & Decrement</div>
      <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button onClick={decrementHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">
            - 
        </button>

        <div className="font-bold gap-12 text-5xl">{count}</div>

            <button onClick={incrementHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">
               +
            </button>

      </div>
      <div>
        <button onClick={resetHandler} className=" bg-[#0398d4] text-white  text-center px-8 py-3 rounded-lg text-lg border-[#bfbfbf] ">
        Reset
        </button>
       
      </div>
    </div>
  )
}


export default App;

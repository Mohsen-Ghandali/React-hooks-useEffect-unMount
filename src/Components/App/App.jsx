import { useEffect, useState } from "react";

const App = () => {
const [resize,setResize]=useState(window.innerWidth)
const changeSize=()=>{
  setResize(window.innerWidth)
}
 useEffect(()=>{
  console.log("trigger counter");
  window.addEventListener("resize", changeSize)
  return ()=>{
    console.log("clean");
    window.removeEventListener("resize", changeSize)
  }
 },[resize])
  return (
    <>
      <div className=" col-12  p-5 bg-dark text-white mt-2 ">

        <h3 className="mt-3 offset-5">Size: {resize}px</h3>
        
      </div>
    </>
  );
};

export default App;


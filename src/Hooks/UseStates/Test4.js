import { useState } from "react";

function Test4(){
    const [data, setData]=useState(10)
   function change(){
    setData(90)
   }
    return(
        <div>
            <h1>{data}</h1>
            <button onClick={change}>ok</button>
        </div>
    )
}export default Test4
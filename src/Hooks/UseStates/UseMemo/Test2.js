import React, { useMemo, useState } from "react";

function Test2() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  function increment() {
    setCountOne(countOne + 1);
  }

  function decrement() {
    setCountTwo(countTwo - 1);
  }

  const isEven=useMemo(()=>{ 
    for( var i=0;i<1000000000;i++){}
    return countOne % 2===0
  },[countOne])
  console.log(isEven)

  return (
    <div>
      <button onClick={increment}>Count One:{countOne}</button> 
        {isEven?'Even':'Odd'}<br/>
      <button onClick={decrement}>Count Two: {countTwo}</button> 
    </div>
  );
}

export default Test2;

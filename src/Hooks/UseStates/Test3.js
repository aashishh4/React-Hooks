import { useState } from "react";

function Test3() {
  const [data, setData] = useState({ count: 0, name: 'ram' });

  function inc() {
    setData(prevdata => {
      return { ...prevdata,name:'increment', count: prevdata.count + 1 };
    });
  }

  function dic() {
    setData(prevdata => {
      return { ...prevdata,name:'dicrement', count: prevdata.count - 1 };
    });
  }

  return (
    <div>
      {data.name}<br/>
      <button onClick={inc}>+</button>
      {data.count}
      <button onClick={dic}>-</button>
    </div>
  );
}

export default Test3;

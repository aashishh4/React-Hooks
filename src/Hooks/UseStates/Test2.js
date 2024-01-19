import { useState } from "react";

function Test2() {
    const [data, setData] = useState(0);

    function increment() {
        setData(prevdata => prevdata + 1);
        setData(prevdata => prevdata + 1);
    }

    function decrement() {
        setData(prevdata => prevdata - 1);
    }

    return (
        <div>
            <button onClick={increment}>+</button>
            {data}
            <button onClick={decrement}>-</button>
        </div>
    );
}

export default Test2;

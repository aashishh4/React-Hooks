import React, { useEffect, useState } from "react";

function Test2() {
  const [data, setData] = useState('ashish');
  const [counts, setCounts] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    // console.log("mount");

    // return () => {
    //   console.log('unmount');
    // };
  }, []);

  useEffect(() => {
    // console.log('update');

    const fetchData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/${data}`);
        const json = await response.json();
        // console.log(json);
        setItems(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // return () => {
    //    console.log('cleanup');
    // };
  },[data]);
  console.log("item",items);

  return (
    <div>
      {data}<br />
      <button onClick={() => setCounts(counts + 1)}>count: {counts}</button>
      <button onClick={() => setData('users')}>users</button>
      <button onClick={() => setData('posts')}>post</button>
      <button onClick={() => setData('comments')}>comments</button>

      {/* Display fetched items */}
      <ul>
        {Array.isArray(items) && items.length > 0 ? (
          items.map((item, index) => (
            <li key={index}>{JSON.stringify(item)}</li>
          ))
        ) : (
          <li>No items to display</li>
        )}
      </ul>
    </div>
  );
}

export default Test2;

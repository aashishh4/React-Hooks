import { useEffect } from "react";
import { useState } from "react"

function Test1(){
    const [counter,setCounter]=useState('posts');
    useEffect(()=>{
        console.log("component did mount")
    },[])
    useEffect(()=>{
        console.log("componet did update")
        return()=>{
            //cleanup
            console.log("unmount")
        }
    })
    return(
        <div>
            <h1>
                <button onClick={()=>setCounter('posts')}>posts</button>
                <button onClick={()=>setCounter('user')}>users</button>
                <button onClick={()=>setCounter('comments')}>comments</button><br/>
                {counter}
            </h1>
        </div>
    )
}
export default Test1
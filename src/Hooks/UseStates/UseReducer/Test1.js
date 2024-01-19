import { useReducer } from "react";

const initialState={count:0}
const reducer=(state,action)=>{
    console.log("state",state)
    console.log("action",action)
    switch(action.type){
        case 'incriment':
        return {count:state.count+1}
        case 'dicrement':
            return {count:state.count-1}
            default :   
            return state
    }
}

function Test1(){
    
    const [state,dispatch]=useReducer(reducer,initialState)
  
   

    return(
        <div>
            <button onClick={()=>dispatch({type:'incriment'})}>+</button>
            {state.count}
            <button onClick={()=>dispatch({type:'dicrement'})}>-</button>
        </div>
    )
}
export default Test1
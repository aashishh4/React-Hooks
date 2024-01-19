import D from "./D"

function C(props){
    console.log(props)
    return(
        <div>
            
                hello C
                <D name={props.name}/>
            
        </div>
    )
}
export default C
import C from "./C"

function B(props){
    console.log(props)
    return(
        <div>
            
                hello B
                <C name={props.name}/>
            
        </div>
    )
}
export default B
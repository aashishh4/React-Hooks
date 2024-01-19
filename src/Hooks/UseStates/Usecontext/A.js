import B from "./B"

function A(props){
    console.log(props)
    return(
        <div>
           
                Hello A
              <B name="ram"/>
            
        </div>
    )
}
export default A
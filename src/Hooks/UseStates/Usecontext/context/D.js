import { useContext } from "react"
import { babu, jalela } from "./A"

function D(){
    const firstname=useContext(babu)
    const lastname=useContext(jalela)
    return(
        <div>
            hello D
       my name is {firstname} {lastname 
       
       }
        </div>
    )
}
export default D
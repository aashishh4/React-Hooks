import { createContext } from "react"
import B from "./B"
   export const babu=createContext()
   const jalela=createContext()
function A(){

    return(
        <babu.Provider value="ramlakan">
            <jalela.Provider value="kevat">
        <div>
            hello A
        <B/>
        </div>
        </jalela.Provider>
        </babu.Provider>
    )
}export default A
export {jalela}
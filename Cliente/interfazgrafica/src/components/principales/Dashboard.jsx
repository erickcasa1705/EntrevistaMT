import {Header} from "./Header"
import { PersonaList } from "./PersonaList"
//El useNavegate es para poner (navegate('/otrapagina');)
export function Dashboard(){
    return(
        <>
        <Header></Header>
        <PersonaList></PersonaList>
        <p>
            
        </p>
        </>
    )
}
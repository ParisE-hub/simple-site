import Listitem from "./listitem"
import "./style.css"
export default function Page() {
    var ageList=[
        <Listitem key={1} user_name={"Praise"} user_age={"28"}/>,
        <Listitem key={1} user_name={"Dante"} user_age={"21"}/>,
        <Listitem key={1} user_name={"Rita"} user_age={"35"}/>
    ]
    return(
        <main>
        <h1>Introduction to Inputted Values</h1>
        <p>The List of Age So Far</p>
        <ul>{ageList}</ul>
        </main>
    )
    
}
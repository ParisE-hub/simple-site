"use client"
import {useState} from "react"
export default function Header() {
   var[open,setOpen]=useState("");
   var[classIcon,setclassIcon]=useState("fa fa-bars");
   function handler() {
      if (open==0) {
        setOpen(180);
        setclassIcon("fa fa-close");
    }
       else{ (setOpen(0))
       setclassIcon("fa fa-bars");
       } 
   }




    return (
    <header>
        <a href="/">IDEaL Concepts</a>
        <button onClick={handler}><i className={classIcon}></i></button>
        <nav style={{height:open}}>
                    
                   <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact</a></li>
                    </ul> 
                </nav>   
    </header>
    
)
}
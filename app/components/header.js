"use client"
import {useState} from "react"
export default function Header() {
   var[open,setOpen]=useState();
   var[IsClick,setIsClicked]=useState(false);
   function handler() {
      if (open==0) {
        setOpen(160);
        setIsClicked(true);
    }
       else{ (setOpen(0))
       setIsClicked(false);
       } 
   }

   if (IsClick==false) {
    var icon=<i className="fa fa-bars"></i>;
    }
    else { 
        var icon=<i className="fa fa-close"></i>;
    }


    return (
    <header>
        <h1>IDEaL Concepts</h1>
        <button onClick={handler}>{icon}</button>
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
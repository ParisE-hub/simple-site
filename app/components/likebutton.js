"use client"
import {useState} from "react";

export default function Likebutton() {
    var[classIcon,setclassIcon]=useState("fa fa-thumbs-up");
    var[buttonText,setbuttonText]=useState("Like");
    function handleChange() {
        setclassIcon("fa fa-check")
        setbuttonText("Liked")
    } 
 
    return(
        <button onClick={handleChange}>
            <i className={classIcon}></i> 
            {buttonText}</button>
    )
}
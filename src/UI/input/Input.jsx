import './Input.css';
import { useEffect } from "react";

export default function Input({inputref, ...someprops}) {
 

    const Class = `${someprops.className ? someprops.className + " " : ""}field`;
  
    return (
        <input {...someprops} className={Class} ref={inputref} autoComplete="on"/>
    )
}
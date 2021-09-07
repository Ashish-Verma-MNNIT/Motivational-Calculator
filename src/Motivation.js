import React, { useEffect, useState } from "react"
import randomcolor from "randomcolor"  //want to show different color to quotes
import "./mode.css"
function Motivation(props){
    const [moti,setMoti]=useState("")  //to store result from motivation api
    const [color,setColor]=useState("White")    //color of the quote

    useEffect(() => {                           //fetch api every 6 seconds and set moti
        const interval = setInterval(() => {
            fetch("https://favqs.com/api/qotd")
            .then(response=>response.json())
            .then(response=>setMoti(response.quote))
            .catch(e=>setMoti(e+""))
        }, 6000);
        return () => clearInterval(interval);
      }, []);

    useEffect(()=>setColor(randomcolor()),[moti])       //new color when quote changes
      const name=props.mode?"D":""
    return (
        <div>
            <blockquote className={"blockquote"+name} style={{color:color}}>{moti.body?"‟":null}{moti.body}{moti.body?"❞":null}</blockquote>
            <cite className={"cite"+name}>{moti.author?"--":null} {moti.author}</cite>
        </div>
    )
}
export default Motivation
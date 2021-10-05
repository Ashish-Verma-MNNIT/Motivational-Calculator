//this is calculator

import React,{ useEffect, useRef } from "react"
import "./mode.css"
import clickHandler from "./Logic"

function Calculator(props){
    //const InuptRef=useRef(null)
   // useEffect(()=>InuptRef.current.focus())  //for focussing input field on each render
    const name=props.mode?"D":""       //will add a 'D' to each class/id to implement dark mode
    return(
        <div id={"CalculatorOutbox"+name}>
        <h1 className={"heading"+name}>Calculator</h1>
        <input type="text" id={"inputArea"+name} name="equation" value={props.equation}/>
        <div className={"container"+name}>
            <button className={"button"+name} onClick={(event)=>clickHandler(props,event)} name="C" id={"C"+name}>C</button>
            <button className={"button"+name} onClick={(event)=>clickHandler(props,event)} name="equalTo" id={"equals"+name}>=</button>
            <button className={"button"+name} onClick={(event)=>clickHandler(props,event)} >9</button>
            <button className={"button"+name} onClick={(event)=>clickHandler(props,event)} >+</button>
            <button className={"button"+name} onClick={(event)=>clickHandler(props,event)} >8</button>
            <button className={"button"+name} onClick={(event)=>clickHandler(props,event)} >7</button>
            <button className={"button"+name} onClick={(event)=>clickHandler(props,event)} >6</button>
            <button className={"button"+name} onClick={(event)=>clickHandler(props,event)} >-</button>
            <button className={"button"+name} onClick={(event)=>clickHandler(props,event)} >5</button>
            <button className={"button"+name} onClick={(event)=>clickHandler(props,event)} >4</button>
            <button className={"button"+name} onClick={(event)=>clickHandler(props,event)} >3</button>
            <button className={"button"+name} onClick={(event)=>clickHandler(props,event)} >*</button>
            <button className={"button"+name} onClick={(event)=>clickHandler(props,event)} >2</button>
            <button className={"button"+name} onClick={(event)=>clickHandler(props,event)} >1</button>
            <button className={"button"+name} onClick={(event)=>clickHandler(props,event)} >0</button>
            <button className={"button"+name} onClick={(event)=>clickHandler(props,event)} >/</button>
        </div>
    </div>
    )
}
export default Calculator
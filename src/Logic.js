

function clickHandler(props,event){
    const b=event.target.innerText
    const x=event.target.name
    if(x==="C")
        props.setEquation("")
    else if(x==="equalTo"){
        try{props.setEquation(eval(props.equation) + "")}
        catch{props.setEquation("Bad equation")}
    }else
        props.setEquation(props.equation+b)
}
export default clickHandler
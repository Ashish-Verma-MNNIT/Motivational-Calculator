
function Mode(props){
    const design=document.querySelector('body').style
    if (props.mode){
            design.backgroundColor="black"
            design.color="white"
    }
    else{
        design.backgroundColor="white"
        design.color="black"
    }
    const Url=props.mode?"/light.png":"/dark.png"
    return(
        <img height="25px" width="25px" src={Url} alt="L" id="mode" onClick={()=>props.setMode((prev)=>!prev)}></img>
    )
}
export default Mode
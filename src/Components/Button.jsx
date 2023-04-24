function Button(props){
    return(
    <button className="btn btn-warning" onClick={props.func}>
      {props.text}
    </button>
    )
}
export default Button;
import '../Styles/skill.css'
function CountryDetails(props){
    return <div key={props.id} className="mainDiv">
    <p className="mainPara">
        <span className="country">{props.name}</span>
    </p>
    <div className='skillDiv'>
        <span className='skill' style={props.styles}></span>
    </div>
    <div className='numberDiv'>
    <p className="secondPara">
        <span className="rightPara">{props.population}</span>
    </p>
    </div>
</div>
}
export default CountryDetails;
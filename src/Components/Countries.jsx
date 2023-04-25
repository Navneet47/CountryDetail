import "../Styles/Countries.css";
import ViewCountryModal from "./ViewCountryModal";
function Countries(props){
    const cDetail = props.details;

    return <div className={props.childClass}>
    <div className="image-div">
        <img  src={props.png} alt='countryImage' />
        <p className="countryName">{props.common}</p>
    </div>
    <div className="country-details">
          <p>Capital:<span>{props.capital}</span></p>
          <p className="langPara">Languages:<span className="lang-span">{props.languages}</span></p>
          <p>Population:<span>{props.population}</span></p>
          <p>Currency:<span>{props.currencies}</span></p>
         <ViewCountryModal theme={props.bgColor} textColor={props.textTheme} country={cDetail ? cDetail : ""}/>
    </div>
</div>
}
export default Countries;

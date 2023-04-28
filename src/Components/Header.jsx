import { useFetch } from '../useFetch';
import Button from './Button';
import "../Styles/Header.css";
function Header(props){
  const [countryLength] = useFetch('https://restcountries.com/v3.1/all');
    return <div className={props.hClass}>
    <section className="header-section-one">
        <header>
        <div className="container my-3">
         <Button  func={props.func} text="Dark"/>
        </div>
          <h1 className='heading'>World Countries Data</h1>
          <h2 className='heading-two'>Currently,we have {countryLength.length} countries</h2>
          <p className='para-one' style={props.styles}>{props.size} satisfied the search criteria</p>
        </header>
    </section>
    </div>
}
export default Header;
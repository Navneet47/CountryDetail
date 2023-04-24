import "../Main.css";
import Button from "./Button";
import { useState} from "react";
import Countries from "./Countries";
import CountryDetails from "./CountryDetails";
import Header from "./Header";
import {useFetch} from "../useFetch";
function Main(props){
   const [country] = useFetch('https://restcountries.com/v3.1/all');
   const [defaultCountry,setDefault] = useState(false);
   const [getCountry,setCountries] = useState([]);
   const [style,setStyle] = useState({
       isTrue:false,
       text:''
    });
    const [topTenPopulatedCountry,setTopTenPopulatedCountry] = useState([]);
    const [isTopTen,setIsTopTen] = useState(false);
    const populationStyles={
         0:{width:'650px'},
         1:{width:'600px'},
         2:{width:'500px'},
         3:{width:'400px'},
         4:{width:'300px'},
         5:{width:'200px'},
         6:{width:'150px'},
         7:{width:'100px'},
         8:{width:"90px"},
         9:{width:'50px'}
    }
    function handleChange(e){
        setDefault(true);
        const nuArray = []
        const {value} = e.target;
        const nameToMatch = value.toLowerCase();
        for(let i = 0; i<country.length;i++){
            if((country[i].name['common'].toLowerCase() === nameToMatch)||(country[i].name['common'].toLowerCase().includes(nameToMatch))){
                nuArray.push(country[i]);
            }
        }
        setCountries(nuArray);
        setStyle({
            isTrue:true
        });
    }

    function getCountryData(country){
        let langArray = [];
        let currency = [];
        const cClass = props.class.countriesChildClass;
        const countryDetails = country;
        const {capital,currencies,flags:{png},languages,population,name:{common}} = country;
        for(let key in languages){
            langArray.push(languages[key]);
        }
        for(let key in currencies){
            currency.push(key);
        }
        return <Countries childClass={cClass} key={common} details={countryDetails} titleColor={props.class.textTheme} bgColor={props.class.bgTheme} languages={langArray.toString()} population={population} currencies={currency.toString()} capital={capital} png={png} common={common}/>
    }

    function getCountryLanguages(country){
        let langArray = [];
        const {languages} = country;
        for(let key in languages){
            langArray.push(languages[key])
        }
        return langArray;
    }
     
    function handlePopulation(){
        setIsTopTen(true);
        setStyle({...style,text:'10 Most populated countries in the world'})
        if(defaultCountry){
            setTopTenPopulatedCountry(getCountry.sort((a,b)=>{
                return parseInt(b.population) - parseInt(a.population);
            }).slice(0,10));
        }else{
            setTopTenPopulatedCountry(country.sort((a,b)=>{
                return parseInt(b.population) - parseInt(a.population)
            }).slice(0,10));
        }
    }

    function handleLanguages(){
        setIsTopTen(false);
        setStyle({...style,text:'10 Most spoken languages in the world'})
        const tempArray = (defaultCountry) ? getCountry.map((country)=>{
            return getCountryLanguages(country)
        }) : country.map((country)=>{
            return getCountryLanguages(country)
        })
        const langArray = [];
        let counter = 0;
        const sortedArray=[];
        const result=[];

        for(let items of tempArray){
            for(let item in items){
                langArray.push(items[item]);
            }
        }

        for(let lang of langArray){
            if(!sortedArray.includes(lang)){
                sortedArray.push(lang)
            }
        }

        for(let i = 0; i<sortedArray.length;i++){
              for(let j = 0; j<langArray.length;j++){
                if(langArray[j] === sortedArray[i]){
                    counter ++
                }
            }
            result.push({lang:sortedArray[i],count:counter});
            counter = 0;
           }
           setTopTenPopulatedCountry(result.sort((a,b)=>{return b.count - a.count}).slice(0,10));
    }
     
    return <> 
        <Header text={props.class.icon} bClass={props.class.btnClass} hClass={props.class.headerClass} func={props.func} styles={style.isTrue ? {display:''}:{display:'none'}} size={getCountry.length} />
    <div className={props.class.mainClass}>
    <section className={props.class.mainSectionOneClass}>
        <input name="CountryName" onChange={handleChange} placeholder="Search countries by name, city" type='text' />
    </section>
        <section className="section-two">
        <div className="parent-div">
          {defaultCountry ? getCountry.sort((a,b)=>a.name['common'].localeCompare(b.name['common'])).map((country)=>{
            return getCountryData(country)
          }):country.sort((a,b)=>a.name['common'].localeCompare(b.name['common'])).map((country)=>{
            return getCountryData(country)
          })
          }
        </div>
        
        </section>
        <section className={props.class.mainSectionThreeClass}>
            <div className={props.class.divClass}></div>
            <div className="parent-btn-div">
                <div className="btn-div">
                    <Button func={handlePopulation} text="POPULATION" />
                    <Button func={handleLanguages} text="LANGUAGES" />
                </div>
                <div className="countries-div">
                    <p className="top-para">{style.text}</p>
                </div>
            </div>
        </section>
        <section>
           <div className="mainSectionDiv">
           <div className={props.class.mainSectionFourClass}>
            {isTopTen ? <CountryDetails styles={{width:'1000px'}} name='World' population='7777721563' />:""}
            {isTopTen ? ((topTenPopulatedCountry.length === 1 || topTenPopulatedCountry.length > 1)? topTenPopulatedCountry.map((country,index)=>{
                return <CountryDetails styles={populationStyles[index]} key={country.name['common']} name={country.name['common']} population={country.population} /> 
            }):"") : ((topTenPopulatedCountry.length === 1 || topTenPopulatedCountry.length > 1)? topTenPopulatedCountry.map((country)=>{
                return <CountryDetails styles={country.length <10 ? {width:country.count.toString()+'00px'}:{width:country.count.toString()+'0px'}} key={country.lang} name={country.lang} population={country.count} /> 
            }):"")}
           </div>
           </div>
        </section>
    </div>
    </>
}
export default Main;
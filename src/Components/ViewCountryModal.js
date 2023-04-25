import React from 'react';
import "../Styles/Modal.css";

function ViewCountryModal(props) {
    const { capital, currencies, region, subregion, timezones, maps:{googleMaps},continents, car:{side}, flags: { png }, languages, population, name: { common } } = props.country;
    const langArray = [];
    const currency = [];
    const timezoneArray = [];
    for(let key in languages){
        langArray.push(languages[key]);
    }
    for(let key in currencies){
        currency.push(key);
    }
    for(let key in timezones){
        timezoneArray.push(key);
    }
    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target={`#exampleModal${common ? common.slice(0, 2) : ''}`}>
                View more
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id={`exampleModal${common ? common.slice(0, 2) : ''}`} data-bs-theme={props.theme} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 style={{color:props.txtColor}} className="modal-title fs-5" id="exampleModalLabel">{common}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="card">
                                <img style={{width:'15rem',boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}} src={png ? png : ''} className="card-img-top mx-auto my-2 myImg" alt={png ? capital : 'Not found'} />
                                    <div className="card-body">
                                        <p className='card-text'></p>
                                        <p className="card-text"><strong>Currency:</strong> {currency.toString()} </p>
                                        <p className="card-text"><strong>Capital:</strong>  {capital}</p>
                                        <p className="card-text"><strong>Languages:</strong>  {langArray.toString()}</p>
                                        <p className="card-text"><strong>Population:</strong>  {population}</p>
                                        <p className="card-text"><strong>Region:</strong>  {region}</p>
                                        <p className="card-text"><strong>Sub-Region:</strong>  {subregion}</p>
                                        <p className="card-text"><strong>Continent:</strong>  {continents}</p>
                                        <p className="card-text"><strong>Map:</strong> <a style={{textDecoration:'none'}} href={googleMaps}>Click</a> to view</p>
                                        <p className="card-text"><strong>Car Driving Side:</strong>  {side.charAt(0).toUpperCase()+side.slice(1)}</p>
                                        <p className="card-text"><strong>Timezone:</strong>{timezones.length === 1 ? timezones[0] : timezones.map((time,index)=>{
                                            if(index === timezones.length-1){
                                                return time.toString()
                                            }
                                            return time.toString()+","
                                        })}</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewCountryModal
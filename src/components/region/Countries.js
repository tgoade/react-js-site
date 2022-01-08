import * as React from 'react';
import RegionLogic from "./RegionLogic";


const Countries = () => {

    const { countries, country, countryHandler, defaultCountry } = RegionLogic();
    
    return (
            <select className="footer--select" value={country} onChange={countryHandler}>
                {countries && countries.map((country, index) => {
                    if(country.name === {defaultCountry}){
                        return (
                            <option key={index} value={country}>{country.name}</option>
                        )
                    } else {
                        return (
                            <option key={index}>{country.name}</option>
                        )
                    }
                })
                }
            </select>
    )
}

export default Countries
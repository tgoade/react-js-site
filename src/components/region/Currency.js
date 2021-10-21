//import { useState } from "react";
import RegionLogic from "./RegionLogic"

const Currency = () => {

    const { countries, currency, currencyHandler, defaultCurrency } = RegionLogic();

    return (
            <select className="footer--select" value={currency} onChange={currencyHandler}>
                {countries && countries.map((country, index) => {
                    if(country.currency === {defaultCurrency}){
                        return (
                            <option key={index} value={currency}>{country.currency}</option>
                        )
                    } else {
                        return (
                            <option key={index}>{country.currency}</option>
                        )
                    }
                })
                }
            </select>
    )
}

export default Currency
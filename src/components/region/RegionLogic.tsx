import { useEffect, useState } from "react";

// interface CountryResults {
//     data: {
//         countries: [
//             {
//                 name: string;
//                 currency: string
//             }
//         ]
//     }
// }

const RegionLogic = () => {
    const [countries, setCountries] = useState<string[] | null>(null);
    const [country, setCountry] = useState("United States");
    const [currency, setCurrency] = useState("USD");

    const getQuery = 
    `query {
        countries
        {
          name
          currency
        }
      }`

    useEffect(() => {
        fetch("https://countries.trevorblades.com", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({query: getQuery})
        })
        .then(response => response.json())
        .then(data => setCountries(data.data.countries))
    }, [getQuery])

    let defaultCountry = "United States";
    
    let defaultCurrency = "USD";
    
    const countryHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCountry(event.target.value);
    }

    const currencyHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrency(event.target.value);
    }

    return { countries, country, countryHandler, defaultCountry, currency, currencyHandler, defaultCurrency }
}

export default RegionLogic
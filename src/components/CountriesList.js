import {Link} from 'react-router-dom';
import { useState, useEffect} from 'react';
import countriesData from '../countries.json'; 

export function CountriesList() {
    const [listCountries, setListCountries] = useState([]);

    useEffect(() => {
        setListCountries(countriesData);
    }, []);

    return (
        <div>
{listCountries.map((country) => {
    return (
        <Link to={`${country.alpha3Code}`}>
            {country.name.official}
        </Link>
    )
})}
        </div>
    )
}
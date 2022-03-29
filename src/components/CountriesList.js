import {Link} from 'react-router-dom';
import { useState, useEffect} from 'react';

export function CountriesList(props) {
    const [listCountries, setListCountries] = useState([]);

    useEffect(() => {
        setListCountries(props.countries);
    }, [props.countries]);

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
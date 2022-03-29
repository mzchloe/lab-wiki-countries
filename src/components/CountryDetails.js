
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react';
import countriesData from '../countries.json';

export function CountryDetails(){
    const [countryDetail, setCountryDetails] = useState([]);

    useEffect(() => {
        setCountryDetails(countriesData)
      }, [])
    
    return (
        <div class="col-7">
        <img src="https://restcountries.eu/data/fra.svg" alt="country flag" style="width: 300px"/>
        <h1>France</h1>
        <table class="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style="width: 30%">Capital</td>
              <td>Paris</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                551695 km <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  <li><Link to="/AND">Andorra</Link></li>
                  <li><Link to="/BEL">Belgium</Link></li>
                  <li><Link to="/DEU">Germany</Link></li>
                  <li><Link to="/ITA">Italy</Link></li>
                  <li><Link to="/MCO">Monaco</Link></li>
                  <li><Link to="/ESP">Spain</Link></li>
                  <li><Link to="/CHE">Switzerland</Link></li>
                </ul>  
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}
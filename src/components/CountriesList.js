import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import countriesData from "../countries.json"

export function CountriesList() {
  const [listCountries, setListCountries] = useState([])

  useEffect(() => {
    setListCountries(countriesData)
  }, [])

  return (
      
    
    <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
      <div className="list-group">
        {listCountries.map((country) => {
          return (
              <div>
            <Link className="list-group-item list-group-item-action" key={country.alpha3Code} to={`${country.alpha3Code}`} >
              <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={`${country.name.official}`} />
              <p>{country.name.official}</p>
            </Link>
            </div>
          )
        })}
      </div>
    </div>
    
  )
}

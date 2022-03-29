import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import countriesData from "../countries.json"

export function CountriesList() {
  const [listCountries, setListCountries] = useState([])

  useEffect(() => {
    setListCountries(countriesData)
  }, [])

  let imgSrc = `https://flagpedia.net/data/flags/icon/72x54/${countriesData.alpha2Code.toLowerCase()}.png`

  return (
    <div className="col-5">
      <div className="list-group">
        {listCountries.map((country) => {
          return (
            <Link to={`${country.alpha3Code}`}>
              <img src={imgSrc} alt="" />
              {country.name.official}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

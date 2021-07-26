import React, { useState, useEffect } from "react";
import './App.css';
import { MenuItem, FormControl, Select, Card, CardContent} from "@material-ui/core"
import InfoBox from "./InfoBox"
import Map from "./Map"

function App() {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState("worldwide")

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => (
          {
            name:country.country,
            value: country.countryInfo.iso2
          }))

          setCountries(countries)
      })
    }

    getCountriesData()
  }, [])

  const onCountryChange = async (event) => {
    const countryCode = event.target.value
    setCountry(countryCode)
  }

  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
        <h1>Covid 19 tracker app</h1>
          <FormControl className="app__dropdown">
            <Select variant="outlined" onChange={onCountryChange} value={country}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country) => (
              <MenuItem value={country}>{country}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        
        <div className="app__stats">
          <InfoBox title="Coronavirus Cases" />

          <InfoBox title="Recovered" />

          <InfoBox title="Deaths" />

          {/* InfoBox */}
          {/* InfoBox */}
          {/* InfoBox */}
        </div>

        
        <Map/>
      </div>
      <Card className="app__right">
        <CardContent>
          <h3>Live Cases by Country</h3>
          {/* Table */}
          <h3>Worldwide new cases</h3>
          {/* Graph */}
        </CardContent>
      </Card>
    </div>
  );
}

export default App;

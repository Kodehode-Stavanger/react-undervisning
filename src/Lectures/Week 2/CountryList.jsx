import React, { useState } from "react";
import Country from "./Country";

export const Context = React.createContext();

function CountryList() {
  const [countries, setCountries] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [countryCapital, setCountryCapital] = useState("");
  const [countryContinent, setCountryContinent] = useState("");

  function handleAddCountry() {
    const newCountry = {
      name: countryName,
      capital: countryCapital,
      continent: countryContinent,
    };
    setCountries((c) => [...c, newCountry]);
    setCountryName("");
    setCountryCapital("");
    setCountryContinent("");
  }

  function handleDeleteCountry(deleteIndex) {
    setCountries((prevData) =>
      prevData.filter((_, index) => index !== deleteIndex)
    );
  }

  function handleNameChange(e) {
    setCountryName(e.target.value);
  }

  function handleCapitalChange(e) {
    setCountryCapital(e.target.value);
  }

  function handleContinentChange(e) {
    setCountryContinent(e.target.value);
  }

  return (
    <Context.Provider value={[countries, setCountries]}>
      <div>
        <h2>List of countries</h2>
        <ul>
          {countries.map((country, index) => (
            <Country key={index} data={country} id={index} />
          ))}
        </ul>
        <input
          type="text"
          value={countryName}
          onChange={handleNameChange}
          placeholder="Enter country name.."
        />
        <br />
        <input
          type="text"
          value={countryCapital}
          onChange={handleCapitalChange}
          placeholder="Enter capital name.."
        />
        <br />
        <input
          type="text"
          value={countryContinent}
          onChange={handleContinentChange}
          placeholder="Enter continent name.."
        />
        <br />
        <button onClick={handleAddCountry}>Add country</button>
      </div>
    </Context.Provider>
  );
}
export default CountryList;

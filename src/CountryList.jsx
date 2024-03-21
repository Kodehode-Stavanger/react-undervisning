import { useState } from "react";
import Country from "./Country";
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
    <div>
      <h2>List of countries</h2>
      <ul>
        {countries.map((country, index) => (
          <div onClick={() => handleDeleteCountry(index)} key={index}>
            <Country data={country}></Country>
          </div>
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
  );
}
export default CountryList;

import { useContext } from "react";
import { Context } from "./CountryList";

function Country({ data: { name, capital, continent }, id }) {
  const [countries, setCountries] = useContext(Context);

  function handleDeleteCountry(deleteIndex) {
    setCountries((prevData) =>
      prevData.filter((_, index) => index !== deleteIndex)
    );
  }
  return (
    <li onClick={() => handleDeleteCountry(id)}>
      <h3>{name}</h3>
      <p>{capital}</p>
      <p>{continent}</p>
    </li>
  );
}
export default Country;

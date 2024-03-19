function Country({ data: { name, capital, continent } }) {
  return (
    <li>
      <h3>{name}</h3>
      <p>{capital}</p>
      <p>{continent}</p>
    </li>
  );
}
export default Country;

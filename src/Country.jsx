function Country({ data: { name, capital, continent, onClick } }) {
  console.log(onClick);
  return (
    <li style={{ border: "5px solid black" }}>
      <h3>{name}</h3>
      <p>{capital}</p>
      <p>{continent}</p>
    </li>
  );
}
export default Country;

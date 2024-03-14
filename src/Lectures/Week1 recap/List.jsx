export default function List() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const numList = array.map((number) => <li>{number}</li>);
  return <ul>{array}</ul>;
}

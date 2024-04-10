import { Link } from "react-router-dom";
export default function BookList({ data }) {
  return (
    <div>
      <h1>BOOK LIST PAGE</h1>
      <ul>
        {data?.map((book) => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

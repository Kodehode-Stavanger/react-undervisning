import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function BookListPage() {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://gutendex.com/books/");
      setData(result.data.results);
    };
    fetchData();
  }, []);
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

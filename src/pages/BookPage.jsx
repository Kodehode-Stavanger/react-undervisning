import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function BookPage() {
  const { bookId } = useParams();
  const [bookData, setBookData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`http://gutendex.com/books/${bookId}`);
      console.log(result);
      setBookData(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>{bookData?.title}</h1>
      <h2>Author(s)</h2>
      <div>
        {bookData?.authors.map((author, i) => (
          <p key={i}>{author.name}</p>
        ))}
      </div>
      <h3>Book id: {bookData?.id}</h3>
      <h3>Download count: {bookData?.download_count}</h3>
    </div>
  );
}

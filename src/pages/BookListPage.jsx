import { useEffect, useState } from "react";
import axios from "axios";
import BookList from "../components/BookList";
import NotFoundPage from "./NotFoundPage";

export default function BookListPage() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await axios("https://gutendex.com/books/");
        setData(result.data.results);
        setIsLoading(false);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, []);

  if (error) return <NotFoundPage msg={error} />;
  if (isLoading) return <h1>LOADING</h1>;

  return (
    <>
      <BookList data={data} />
    </>
  );
}

import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to my book page</h1>
      <Link to="/books">Go to list of books 📖</Link>
    </div>
  );
}

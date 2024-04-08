import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div>
      <h1>Home page!</h1>
      <a href="/profiles">Go to profiles page</a>
      <br />
      <Link to="/profiles">Better profiles link here</Link>
    </div>
  );
}

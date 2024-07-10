import { Link } from "react-router-dom";
import "../styles/NavBar.scss";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="./">Where is the world?</Link>
      </h1>
    </nav>
  );
}

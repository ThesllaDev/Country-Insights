import { Link } from "react-router-dom";
import "../styles/CountriesBordersLinks.scss";

export default function CountryBorderLinks({ datas }) {
  return (
    <>
      <p>Border Countries:</p>
      <nav>
        <ul className="countries-borders">
          {datas.borders.map((border) => (
            <li key={border}>
              <Link to={`/countrie/${border}`}>{border}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

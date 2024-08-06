import { Link } from "react-router-dom";
import "../styles/CountriesCard.scss";

function CountriesCard({ datas }) {
  return (
    <>
      <Link to={`/countrie/${datas.cca3}`}>
        <div className="card">
          <figure>
            <img src={datas.flags.svg} alt={datas.flags.alt} />
            <figcaption>{datas.name.common}</figcaption>
          </figure>
          <ul>
            <li>
              <span>Population:</span> {datas.population.toLocaleString()}
            </li>
            <li>
              <span>Region:</span> {datas.region}
            </li>
            <li>
              <span>Capital:</span> {datas.capital}
            </li>
          </ul>
        </div>
      </Link>
    </>
  );
}

export default CountriesCard;

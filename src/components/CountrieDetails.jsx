import CountryBorderLinks from "./CountryBorderLinks";

export default function CountrieDetails({ datas }) {
  const formattedCurrencies = datas.currencies
    ? Object.values(datas.currencies)
        .map((currency) => currency.name)
        .join(", ")
    : "N/A";

  const formattedLanguages = datas.languages
    ? Object.values(datas.languages).sort().join(", ")
    : "N/A";

  return (
    <>
      <div className="t">
        <img src={datas.flags.svg} alt={datas.flags.alt} />
        <section>
          <h1>{datas.name.common}</h1>
          <div>
            <ul>
              <li>
                <span>Native Name: </span>
                {datas.name.official}
              </li>
              <li>
                <span>Population:</span> {datas.population.toLocaleString()}
              </li>
              <li>
                <span>Region:</span> {datas.region}
              </li>
              <li>
                <span>Sub Region: </span>
                {datas.subregion}
              </li>
              <li>
                <span>Capital:</span> {datas.capital}
              </li>
            </ul>
            <ul>
              <li>
                <span>Top Level Domain:</span> {datas.tld}
              </li>
              <li>
                <span>Currencies:</span> {formattedCurrencies}
              </li>
              <li>
                <span>Languages:</span> {formattedLanguages}
              </li>
            </ul>
          </div>
          {datas.borders && <CountryBorderLinks datas={datas} />}
        </section>
      </div>
    </>
  );
}

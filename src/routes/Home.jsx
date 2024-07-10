import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import SearchAndFilter from "../components/SearchAndFilter";
import CountriesCard from "../components/CountriesCard";
import "../styles/Home.scss";

export default function Home() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  const getDatas = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDatas();
  }, []);

  const handleSearchChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const handleRegionChange = useCallback((e) => {
    setRegion(e.target.value);
  }, []);

  const filteredCountries = data.filter((country) => {
    return (
      country.name.common.toLowerCase().includes(search.toLowerCase()) &&
      (region ? country.region === region : true)
    );
  });

  console.log(data);

  return (
    <main>
      <SearchAndFilter
        onSearchChange={handleSearchChange}
        onRegionChange={handleRegionChange}
      />
      <article>
        {filteredCountries.map((country) => (
          <CountriesCard key={country.cca3} datas={country} />
        ))}
      </article>
    </main>
  );
}

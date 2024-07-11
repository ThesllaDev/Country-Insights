import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CountrieDetails from "../components/CountrieDetails";
import "../styles/Countrie.scss";

export default function Countrie() {
  const { id } = useParams();
  const [country, setCountry] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/alpha/${id}`
        );
        setCountry(response.data[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountry();
  }, [id]);

  if (!country) return <p>Loading...</p>;

  return (
    <div className="countrie-details">
      <button onClick={() => navigate(-1)}>Back</button>
      <CountrieDetails
        datas={country}
      />
    </div>
  );
}

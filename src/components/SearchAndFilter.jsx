import "../styles/SearchAndFilter.scss";

export default function SearchAndFilter({ onSearchChange, onRegionChange }) {
  return (
    <header className="container">
      <form>
        <input
          type="search"
          onChange={onSearchChange}
          placeholder="Search for a country..."
        />
      </form>
      <select onChange={onRegionChange}>
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Antarctic">Antarctic</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </header>
  );
}

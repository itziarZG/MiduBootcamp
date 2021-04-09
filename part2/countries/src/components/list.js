import React from "react";
import Weather from "./Weather";
const List = ({ countries, handleSearch }) => {
  const countrySelected = (ev) => {
    //send to handleSearch
    handleSearch(ev.target.id);
  };

  if (countries.length > 10)
    return <p>"Too many matches, specify another filter."</p>;
  else
    return (
      <>
        {countries.length === 1 ? (
          <div>
            <h3>{countries[0].name}</h3>
            <p>Capital: {countries[0].capital}</p>
            <p>Population: {countries[0].population}</p>
            <p>Languages</p>
            <ul>
              {countries[0].languages.map((lang) => (
                <li key={lang.name}>{lang.name}</li>
              ))}
            </ul>
            <img width="100px" src={countries[0].flag}></img>
            <Weather name={countries[0].capital} />
          </div>
        ) : (
          <>
            {countries.map((country) => {
              return (
                <p key={country.name}>
                  <span>{country.name} </span>
                  <button id={country.name} onClick={countrySelected}>
                    Show
                  </button>
                </p>
              );
            })}
          </>
        )}
      </>
    );
};
export default List;

import React, { useState } from "react";
import Forecast from "../components/Forecast/Forecast";
import Image from "../components/Image/Image";
import { data } from "../Data/Data";

const Home = () => {
  const [cityName, setCityName] = useState("");
  const [city, setCity] = useState("");

  const search = () => {
    const foundCity = data.find(
      (city) => city.city.toLowerCase() === cityName.toLowerCase()
    );

    if (foundCity) setCity(foundCity);
    else setCity("bad");
  };

  return (
    <div className="home">
      <div className="search_container">
        <input
          className="search-bar"
          type="text"
          placeholder="Enter city name"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <button className="search-button" onClick={search}>
          Search
        </button>
      </div>
      <div className="home_details_container">
        {city == "" ? null : (
          <>
            {city == "bad" ? <p>*Bad Search</p> :
              <>
                <Image climate={city.climate} />
                <Forecast city={city} />
              </>}

          </>
        )}
      </div>
    </div>
  );
};

export default Home;

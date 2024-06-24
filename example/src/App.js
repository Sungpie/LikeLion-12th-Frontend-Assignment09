import React, { useState } from "react";
import useWeatherStore from "./store";

function App() {
  const { weather, loading, error, setCity, fetchWeather } = useWeatherStore();
  const [inputCity, setInputCity] = useState("");

  const handleSearch = () => {
    setCity(inputCity);
    fetchWeather(inputCity);
  };

  return (
    <div className="App">
      <h1>날씨를 알려드립니다.</h1>
      <input
        type="text"
        value={inputCity}
        onChange={(e) => setInputCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleSearch}>검색</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>온도: {weather.main.temp}°C</p>
          <p>날씨: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;

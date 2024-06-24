import create from "zustand";
import axios from "axios";

const useWeatherStore = create((set) => ({
  city: "",
  weather: null,
  loading: false,
  error: null,
  setCity: (city) => set({ city }),
  fetchWeather: async (city) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5ddb99e1efc5c2c19b0b2cdb66d869e7&units=metric`
      );
      set({ weather: response.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useWeatherStore;

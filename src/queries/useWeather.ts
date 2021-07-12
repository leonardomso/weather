import axios, { AxiosRequestConfig } from "axios";
import { useQuery } from "react-query";

import { WeatherResult, WeatherItem } from "./types";

const useEpisodes = () => {
  const options: AxiosRequestConfig = {
    method: "get",
    url: `https://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=${process.env.REACT_APP_OPEN_WEATHER_MAP_KEY}&cnt=40&units=metric`,
  };

  return useQuery<WeatherResult, WeatherItem, any>(
    ["weather", "metric"],
    async () => {
      const { data } = await axios(options);
      return data;
    },
    {
      retry: 10,
      enabled: Boolean("metric"),
      retryDelay: 1000,
      suspense: true,
      useErrorBoundary: true,
      refetchOnWindowFocus: false,
    },
  );
};

export default useEpisodes;
